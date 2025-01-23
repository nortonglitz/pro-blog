# Pro Blog

Pro Blog é um projeto para criação e gerenciamento de posts através de um painel administrativo e a visualização de conteúdos em um blog público. Ambos com responsividade para diferentes telas de dispositivos.

## 🚀 Demonstração

- **Blog:** [https://pro-blog-bice.vercel.app/blog](https://pro-blog-bice.vercel.app/blog)
- **Dashboard:** [https://pro-blog-bice.vercel.app/dashboard](https://pro-blog-bice.vercel.app/dashboard)

## 🛠️ Tecnologias Utilizadas

- **Framework Frontend:** [Next.js](https://nextjs.org/)
- **Componentes:** [React](https://reactjs.org/)
- **Validação de Formulários:** [Zod](https://zod.dev/) com [React Hook Form](https://react-hook-form.com/)
- **Estilização:** [TailwindCSS](https://tailwindcss.com/) e [clsx](https://github.com/lukeed/clsx)
- **Hospedagem:** [Vercel](https://vercel.com/) e [Neon](https://neon.tech/home)
- **Editor de Texto:** [Quill](https://quilljs.com/)
- **Banco de Dados:** [PostgreSQL](https://www.postgresql.org/)
- **ORM:** [Drizzle](https://orm.drizzle.team/)
- **reCAPTCHA** [Google reCAPTCHA](https://developers.google.com/recaptcha)

## 📂 Estrutura do Projeto

O projeto está dividido em duas áreas principais:

- **Dashboard (/dashboard):**  
   Área administrativa onde é possível gerenciar posts, gerenciar mensagens e personalziar o blog.
- **Blog (/blog):**  
   Parte pública onde visitantes podem visualizar os posts publicados e entrar em contato com o usuário.

## 📋 Funcionalidades

### Implementadas

- [x] Criar, editar e excluir posts no painel de controle.
- [x] Exibir posts publicados na página pública do blog.
- [x] Interface simples e funcional do painel de controle.
- [x] Personalizar o título, descrição do profisisonal, suas redes sociais e meta dados.
- [x] Sistema de autenticação para proteger o acesso ao painel controle.
- [x] Inserir recaptcha no formulário de contato e login para segurança contra bots.
- [x] Leitura de mensagens e feedback de quando foi lido.
- [x] Validação de todos os formulários com zod.
- [x] Implementação de seeds para avalição.
- [x] Criação de UI simples e responsiva.
