type RenderParams = {
  /** Chave reCAPTCHA */
  sitekey: string
  /**
   * Posicionamento do selo reCAPTCHA. `inline` permite posicioná-lo com CSS.
   *
   * Padrão: `bottomright`
   */
  badge?: "bottomright" | "bottomleft" | "inline"
  /**
   * String que descreve a ação atual
   */
  action?: string
  /**
   * Tema de cores do widget
   *
   * Padrão: `light`
   */
  theme?: "dark" | "light"
  /**
   * O tamanho do widget
   *
   * Padrão: `normal`
   */
  size?: "compact" | "normal"
  /**
   * O índice de tabulação do widget e desafio.
   * Se outros elementos da sua página usarem tabindex,
   * ele deverá ser definido para facilitar a navegação do usuário.
   *
   * Padrão: `0`
   */
  tabindex?: number
  /**
   * O nome da sua função de callback, executada quando o usuário envia uma resposta bem-sucedida.
   * O token g-recaptcha-response é passado para seu callback.
   */
  callback?: string
  /**
   * O nome da sua função de callback, executada quando a resposta reCAPTCHA
   * expira e o usuário precisa verificar novamente.
   */
  "expired-callback"?: string
  /**
   * O nome da sua função de callback,
   * executada quando o reCAPTCHA encontra um erro (geralmente conectividade de rede)
   * e não pode continuar até que a conectividade seja restaurada.
   * O callback não recebe argumentos que contenham detalhes do erro.
   * Se você especificar uma função aqui, será responsável por informar o usuário que ele deve tentar novamente.
   */
  "error-callback"?: string
}

export interface GoogleReCaptcha {
  /**
   * Renderiza o contêiner como um widget reCAPTCHA e retorna o ID do widget recém-criado.
   * @param container O elemento HTML para renderizar o widget reCAPTCHA. Especifique o ID do contêiner (string) ou o próprio elemento DOM.
   * @param paramaters Um objeto que contém parâmetros como pares de chave-valor,
   * @returns ID do widget recém-criado
   */
  render: (container: string | HTMLElement, paramaters: RenderParams) => number
  /**
   * Redefine o widget reCAPTCHA.
   * @param widget_id ID do widget retornado de grecaptcha.enterprise.render(). Se não for especificado, o padrão será o ID do primeiro widget criado.
   * @returns Não retorna um valor.
   */
  reset: (widget_id: number) => void
  /**
   * Invoca programaticamente a verificação reCAPTCHA.
   * @param sitekey Especifique a chave de site do reCAPTCHA que será protegida.
   * @param action Um objeto com um único par de chave-valor, em que o valor da chave action especifica o nome da ação associada ao elemento protegido. Por exemplo `{"action": "action_name"}`
   * @returns Se for bem-sucedido, ele retornará um objeto Promise contendo o token.
   */
  execute: (sitekey: string, action: { action: string }) => Promise<string>
  /**
   * Executa a função quando a biblioteca JavaScript do reCAPTCHA é carregada.
   * @param callback A função a ser chamada quando a biblioteca reCAPTCHA terminar de carregar.
   * @returns Não retorna um valor
   */
  ready: (callback: function) => void
  /**
   * Obtém a resposta para o widget reCAPTCHA.
   * @param widget_id ID do widget retornado de grecaptcha.enterprise.render(). Se não for especificado, o padrão será o ID do primeiro widget criado.
   * @returns Recebe a resposta do widget reCAPTCHA. Pode ser uma string com o token criado por grecaptcha.enterprise.execute() ou uma string vazia se o token ainda não foi criado.
   */
  getResponse: (widget_id?: number) => string
}
