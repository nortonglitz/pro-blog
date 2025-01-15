import { useForm, UseFormProps, UseFormReturn, Path } from "react-hook-form"
import { z, ZodObject } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

type UseZodFormProps<T extends ZodObject<any>> = {
  schema: T
  options?: Omit<UseFormProps<z.infer<T>>, "resolver"> // Permite passar opções adicionais do React Hook Form
}

/**
 * Hook para configurar React Hook Form com validação via Zod.
 * Inclui suporte para validação individual de campos com atualização automática de erros.
 * @param schema O schema do Zod para validação
 * @param options Opções adicionais do React Hook Form (ex.: defaultValues)
 * @returns Métodos e propriedades do React Hook Form já configurados, incluindo validação individual com erros
 */
export const useZodForm = <T extends ZodObject<any>>({
  schema,
  options
}: UseZodFormProps<T>): UseFormReturn<z.infer<T>> & {
  validateField: (fieldName: Path<z.infer<T>>, value: unknown) => boolean
} => {
  const form = useForm<z.infer<T>>({
    ...options,
    resolver: zodResolver(schema)
  })

  const { setError, clearErrors } = form

  /**
   * Função para validar um único campo usando o schema do Zod.
   * Atualiza automaticamente o estado de erros do React Hook Form.
   * @param fieldName Nome do campo a ser validado
   * @param value Valor do campo a ser validado
   */
  const validateField = (fieldName: Path<z.infer<T>>, value: unknown): boolean => {
    const fieldSchema = schema.shape[fieldName as keyof z.infer<T>]
    const result = fieldSchema.safeParse(value)

    if (result.success) {
      clearErrors(fieldName)
    } else {
      setError(fieldName, {
        type: "manual",
        message: result.error.issues[0]?.message
      })
    }

    return result.success
  }

  return {
    ...form,
    validateField
  }
}
