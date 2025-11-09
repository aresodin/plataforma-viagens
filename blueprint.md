# Blueprint da Aplicação "Jacarelli Viagens"

## Visão Geral

"Jacarelli Viagens" é uma plataforma web moderna e responsiva para visualização e reserva de pacotes de viagem. A aplicação foi construída com Next.js e o App Router, utilizando Tailwind CSS para estilização e Supabase como backend para gerenciamento de dados. O design é focado em uma experiência de usuário visualmente atraente, intuitiva e profissional.

## Funcionalidades e Design Implementados

### 1. Arquitetura e Tecnologia
-   **Framework:** Next.js com App Router (React Server Components).
-   **Backend:** Supabase para banco de dados PostgreSQL e API.
-   **Estilização:** Tailwind CSS para um design "utility-first" rápido e customizável.
-   **Validação:** Zod para validação de esquemas de dados em Server Actions.
-   **Ícones:** Heroicons e SVGs customizados.
-   **Imagens:** Imagens de alta qualidade com `next/image` para otimização e `placeholder="blur"`.

### 2. Estrutura de Páginas e Roteamento
-   **/home (`src/app/page.tsx`):** A página inicial da aplicação. Apresenta a marca e um link para a visualização dos pacotes.
-   **/packages (`src/app/packages/page.tsx`):** A página principal que exibe todos os pacotes de viagem disponíveis em um layout de grid responsivo.
-   **/packages/\[id\] (`src/app/packages/[id]/page.tsx`):** Página de detalhes para um pacote de viagem específico. Exibe informações detalhadas, galeria de imagens e um formulário de reserva.
-   **Layout Raiz (`src/app/layout.tsx`):** Define a estrutura base do HTML, fontes (Inter) e metadados.

### 3. Design e Experiência do Usuário (UX)
-   **Header Fixo e Translúcido:** A barra de navegação superior (`<header>`) é fixa, com um efeito de `backdrop-blur` para um visual moderno.
-   **Página de Listagem de Pacotes:**
    -   **Grid Responsivo:** Os pacotes são exibidos em um grid que se adapta de 3 colunas em desktops para 1 coluna em dispositivos móveis.
    -   **Cards Interativos:**
        -   Efeito de `hover` sutil que eleva o card (`hover:-translate-y-2`).
        -   Sombra (`shadow-lg`) que se renderiza corretamente graças à reestruturação do HTML para evitar conflitos com `overflow-hidden`.
        -   Animação de zoom na imagem do card ao passar o mouse (`group-hover:scale-110`).
        -   Botão "Ver Detalhes" com feedback visual no hover.
-   **Página de Detalhes do Pacote:**
    -   **Layout de Duas Colunas:** Conteúdo principal à esquerda e uma coluna de resumo e reserva à direita.
    -   **Hero Image:** Imagem de destaque no topo com um gradiente escuro para legibilidade do título.
    -   **Tipografia Hierárquica:** Uso claro de fontes de diferentes tamanhos para títulos, subtítulos e parágrafos.
    -   **Ícones de Detalhes:** Informações importantes como datas e transporte são apresentadas com ícones para rápida identificação.
    -   **Layout de Preço Robusto:** O preço é exibido de forma proeminente e a classe `whitespace-nowrap` garante que o valor nunca quebre a linha de forma indesejada.
-   **Formulário de Reserva (`ReservationForm.tsx`):**
    -   Componente de cliente (`"use client"`) que utiliza o hook `useFormState` para gerenciar o estado do formulário de maneira progressiva.
    -   Feedback instantâneo para o usuário sobre o sucesso ou falha da submissão.
    -   Validação de campos com Zod, mostrando mensagens de erro claras.
    -   Botão de submissão com estado de "pending" (desabilitado durante o envio) para prevenir submissões duplicadas.

### 4. Lógica de Backend (Server Actions)
-   **Arquivo Centralizado (`src/app/packages/actions.ts`):** Todas as interações com o servidor (busca de dados e mutações) estão consolidadas neste arquivo.
-   **Busca de Dados:**
    -   `getPublicPackages()`: Busca todos os pacotes ativos no banco de dados.
    -   `getPublicPackageById()`: Busca um pacote específico pelo ID. Foi implementado um contorno (`.limit(1)`) para evitar um bug da biblioteca Supabase com o método `.single()`.
-   **Mutações de Dados:**
    -   `submitReservation()`: Uma Server Action segura que valida os dados de um formulário de reserva usando Zod e simula o salvamento.

### 5. Resolução de Bugs e Otimizações
-   **Bug do Erro de Servidor:** Diagnosticado e resolvido. A causa raiz era um comportamento inesperado no método `.single()` da biblioteca Supabase, que foi contornado usando `.limit(1)`.
-   **Bug da Sombra do Card:** Resolvido reestruturando o HTML do componente de card para que `overflow-hidden` (na imagem) não entrasse em conflito com `box-shadow` (no contêiner pai).
-   **Bug de Layout do Preço:** Resolvido aplicando `whitespace-nowrap` para garantir que o valor monetário nunca seja quebrado em múltiplas linhas.
-   **Otimização de Renderização:** Adicionada a classe `will-change-transform` aos cards para dar uma "dica" ao navegador, otimizando a animação de `hover` e prevenindo glitches.
-   **Limpeza de Código:** Remoção de todos os `console.log`s de depuração após a resolução dos problemas.

## Plano de Ação: Implementação da Reserva e Compra de Pacotes

Nesta fase, o foco é transformar o formulário de reserva existente em um fluxo de compra completo e funcional.

### 1. Análise dos Componentes Atuais
- Ler e compreender a implementação de `src/app/packages/[id]/page.tsx` e `src/app/packages/[id]/ReservationForm.tsx`.

### 2. Reformulação do Formulário de Reserva (`ReservationForm.tsx`)
- Converter o formulário em um componente de múltiplos passos (multi-step).
- **Passo 1: Detalhes dos Passageiros:**
    - Adicionar um campo para o usuário selecionar a quantidade de viajantes.
    - Gerar dinamicamente campos para o **nome completo** e **CPF** de cada passageiro com base na quantidade selecionada.
- **Passo 2: Simulação de Pagamento:**
    - Apresentar um resumo claro da reserva: pacote, número de passageiros e valor total calculado.
    - Incluir campos para simular um pagamento, como método de pagamento (Cartão de Crédito, PIX).
    - Para Cartão de Crédito, adicionar campos para número do cartão, nome no cartão, data de validade e CVV.

### 3. Criação de uma Nova Server Action (`createReservation`)
- Criar uma nova Server Action robusta no arquivo `src/app/packages/actions.ts`.
- **Validação de Dados:** Utilizar o Zod para validar rigorosamente todos os campos do novo formulário (passageiros e pagamento).
- **Transação com a Base de Dados:**
    1.  Verificar a disponibilidade de vagas no pacote (`viagens`). Se indisponível, retornar um erro.
    2.  Criar um novo registro na tabela `reservas` com o `usuario_id`, `viagem_id`, `quantidade_passagens`, `valor_total`, e `status` inicial como 'pendente'.
    3.  Simular o processamento do pagamento, criando um registro na tabela `pagamentos`.
    4.  Se o pagamento for "aprovado" (simulação), atualizar o `status` da reserva na tabela `reservas` para 'confirmada'.
    5.  Decrementar o valor correspondente de `disponibilidade` na tabela `viagens`.
- **Revalidação de Cache:**
    - Utilizar `revalidatePath('/packages/[id]')` para refletir a nova disponibilidade de vagas na página de detalhes.
    - Utilizar `revalidatePath('/my-trips')` para que a nova reserva apareça imediatamente no histórico do usuário.
- **Retorno de Feedback:** Retornar uma mensagem de sucesso ou erro claro para o cliente.

### 4. Atualização da Página "Minhas Viagens" (`my-trips`)
- Implementar a lógica em `src/app/my-trips/page.tsx`.
- A página deverá buscar e exibir todas as reservas com status 'confirmada' associadas ao usuário atualmente logado.
- Para cada reserva, mostrar detalhes relevantes da viagem (`destino`, `data_ida`, etc.), juntando as tabelas `reservas` e `viagens`.
