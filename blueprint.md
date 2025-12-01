# Blueprint da Aplicação "Jacarelli Viagens"

## Visão Geral

"Jacarelli Viagens" é uma plataforma web moderna e responsiva para visualização e reserva de pacotes de viagem. A aplicação foi construída com Next.js e o App Router, utilizando Tailwind CSS para estilização e Supabase como backend para gerenciamento de dados. O design é focado em uma experiência de usuário visualmente atraente, intuitiva e profissional.

## Funcionalidades e Design Implementados

### 1. Arquitetura e Tecnologia
-   **Framework:** Next.js com App Router (React Server Components).
-   **Backend:** Supabase para banco de dados PostgreSQL e API.
-   **Estilização:** Tailwind CSS para um design "utility-first" rápido e customizável.
-   **Validação:** Zod para validação de esquemas de dados em Server Actions.
-   **Ícones:** Material Symbols e SVGs customizados.
-   **Imagens:** `next/image` para otimização de imagens locais e externas, com `placeholder="blur"`.

### 2. Estrutura de Páginas e Roteamento
-   **/home (`src/app/page.tsx`):** A página inicial da aplicação.
-   **/packages (`src/app/packages/page.tsx`):** Exibe todos os pacotes de viagem disponíveis com filtros de busca e ordenação.
-   **/packages/\[id\] (`src/app/packages/[id]/page.tsx`):** Página de detalhes para um pacote de viagem específico.
-   **/my-trips (`src/app/my-trips/page.tsx`):** Painel do usuário com histórico de viagens e métricas pessoais.
-   **/admin/reports (`src/app/admin/reports/page.tsx`):** Painel administrativo para visualização de todo o histórico de reservas e relatórios de receita.

### 3. Design e Experiência do Usuário (UX)
-   **Header Fixo e Translúcido:** A barra de navegação superior (`<header>`) é fixa, com um efeito de `backdrop-blur` para um visual moderno.
-   **Página de Listagem de Pacotes:**
    -   Layout com sidebar de filtros e grid de cards de pacotes.
    -   Cards interativos com efeitos de `hover` e animação de zoom na imagem.
-   **Página de Detalhes do Pacote:**
    -   Layout de duas colunas com galeria de imagens e formulário de reserva.
-   **Formulário de Reserva (`ReservationForm.tsx`):**
    -   Componente de cliente (`"use client"`) com gerenciamento de estado para um fluxo de compra completo.
    -   Feedback instantâneo sobre o status da reserva.

### 4. Lógica de Backend (Server Actions)
-   **Busca de Dados:** Funções `async` em Server Components para buscar pacotes e reservas diretamente do Supabase.
-   **Mutações de Dados:** Uso de Server Actions para criar e gerenciar reservas, garantindo que a lógica de negócio sensível rode apenas no servidor.

### 5. Painel Administrativo (`/admin/reports`)
-   **Visão Geral do Negócio:** Apresenta métricas chave como Receita Total, Total de Reservas e Reservas Confirmadas.
-   **Histórico Completo:** Exibe uma tabela detalhada com todas as reservas feitas na plataforma, incluindo informações do cliente, destino, status e valor.
-   **Segurança:** A página é renderizada no servidor e verifica a sessão do usuário, servindo como base para futuras verificações de permissão de administrador.

### 6. Painel do Usuário (`/my-trips`)
-   **Evolução da Página:** A página foi transformada de uma simples lista para um painel de controle completo para o usuário.
-   **Painel de Métricas Pessoais:** No topo, o usuário visualiza estatísticas calculadas a partir de seu histórico:
    -   **Viagens Feitas:** Contador total de reservas.
    -   **Destino Favorito:** Lógica que analisa e exibe o destino mais visitado.
    -   **Total Gasto:** Soma das despesas com viagens confirmadas.
-   **Organização Cronológica:** A lista de viagens é segmentada em "Suas Próximas Viagens" e "Viagens Passadas" para clareza.
-   **Feedback Visual de Status:** Cada card de viagem inclui um "chip" colorido (verde, amarelo, vermelho) que indica o status da reserva, melhorando a usabilidade.
-   **Cabeçalho de Perfil:** A página saúda o usuário pelo seu e-mail, criando uma experiência personalizada.

### 7. Resolução de Bugs e Otimizações
-   **Erro de Hostname de Imagem:** Resolvido configurando corretamente o arquivo `next.config.js` para permitir domínios de imagens externas quando necessário.
-   **Consistência de Imagens:** Padronização do uso de imagens locais como placeholders para evitar erros e garantir consistência visual em todo o site.
-   **Segurança de Tipo:** Adição de tipagens (Typescript) para os dados vindos do Supabase, eliminando erros de `any` e melhorando a robustez do código.
