# 🌎 Plataforma de Viagens Jacarelli

📌 **Descrição**

Este projeto consiste no desenvolvimento de uma plataforma web para venda de pacotes de viagens pelo Brasil, permitindo que usuários se cadastrem, visualizem pacotes de ônibus/avião/hospedagem, realizem reservas/compras e acompanhem seu histórico de viagens.

O sistema será desenvolvido como parte da disciplina Projeto de Software (TCC), seguindo a arquitetura de 3 camadas:

*   **Front-end:** Interface web responsiva para interação com o usuário (Next.js).
*   **Back-end:** API responsável pela lógica de negócio, autenticação e regras do sistema (Supabase).
*   **Banco de Dados:** Persistência de informações de usuários, pacotes e reservas (Supabase).

---

## 🎯 Objetivo

Oferecer uma solução digital que facilite a pesquisa, compra e gestão de pacotes de viagens, com foco na experiência do usuário e segurança dos dados.

---

## ⚙️ Arquitetura e Funcionalidades Implementadas

### Autenticação e Gestão de Perfil

O sistema utiliza o **Supabase Auth** para segurança e uma tabela pública `usuarios` para dados de perfil, garantindo que informações sensíveis e públicas fiquem separadas.

*   **`auth.users` (Tabela Privada do Supabase):**
    *   Responsável por armazenar credenciais seguras (email, senha com hash).
    *   Gerencia o processo de login e criação de contas via `supabase.auth.signUp()` e `supabase.auth.signInWithPassword()`.
    *   O acesso a esta tabela é controlado exclusivamente pelo Supabase.

*   **`usuarios` (Tabela Pública):**
    *   Armazena informações públicas e de perfil do usuário.
    *   **Campos:** `id` (chave estrangeira de `auth.users`), `nome_completo`, `data_nascimento`, `cpf`, `rg`.
    *   Esta tabela é populada no momento do cadastro.

### Fluxo de Cadastro
1.  O usuário preenche o formulário com dados pessoais (Nome, CPF, etc.) e credenciais (email, senha).
2.  O front-end chama `supabase.auth.signUp()` para criar a entrada na tabela `auth.users`.
3.  Com o ID do usuário retornado, o sistema insere os dados de perfil (Nome, CPF, etc.) na tabela `usuarios`.
4.  Após o sucesso, o usuário é redirecionado para a página `/home`.

### Páginas Implementadas
*   **/login:** Formulário para autenticação de usuários.
*   **/register:** Formulário de cadastro expandido.
*   **/home:** Página de boas-vindas para usuários autenticados.

---

## 📅 Entregas (ACs)

*   **AC1 (14/09):** Cadastro de usuário. **(Concluído)**
*   **AC2 (12/10):** Cadastro e visualização de pacotes.
*   **AC3 (09/11):** Reserva e compra de pacotes.
*   **Entrega Final (30/11):** Histórico de reservas e relatórios administrativos.

---

## 🎨 Design e Estilo

*   **Cor Principal:** Verde (`#3ECF8E`)
*   **Tipografia:** Moderna e legível.
*   **Logo:** Ícone de mala de viagem (`travel_1000dp_FFF_FILL0_wght400_GRAD0_opsz48.svg`).

---

## ✅ Plano de Alterações Concluído

1.  **Renomear Projeto:** Alterar o nome da agência para "Jacarelli".
2.  **Foco no Brasil:** Atualizar textos e imagens para refletir destinos e cultura brasileira.
3.  **Aumentar Logo:** Aumentar o tamanho do logo na página de login.
4.  **Versionamento:** Enviar o projeto para o repositório GitHub de forma segura, utilizando `.gitignore` para proteger dados sensíveis.
5.  **Página Inicial:** Criar a página `/home` como destino pós-login.
6.  **Fluxo de Cadastro Avançado:** Implementar o formulário de cadastro com campos adicionais e a lógica de inserção em duas tabelas (`auth.users` e `usuarios`).
7.  **Correção no Cadastro:** Ajuste na função de cadastro para não inserir o campo `email` na tabela `usuarios`.
