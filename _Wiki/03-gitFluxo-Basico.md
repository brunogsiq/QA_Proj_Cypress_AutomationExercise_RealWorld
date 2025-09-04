# 📘 Fluxo de Branches e Pull Requests no VS Code

## 🌿 Branch (página de rascunho do fichário)

* Imagine que o projeto é um grande **fichário**.
* A **Main** é a **folha principal**, onde fica a versão oficial.
* Cada **branch** é como uma **página de rascunho**: você pode escrever, apagar e testar sem estragar a folha principal.

### Regras básicas:

1. **Nunca** trabalhe direto na `main`.
2. Sempre crie uma **branch nova** para desenvolver algo.

   * Nomeie de forma clara: `zafa-TelaCadastro`.
   * Evite acentos, espaços e caracteres especiais.
3. Confira no canto inferior esquerdo do VS Code se você está na sua branch antes de editar.
4. Todos os commits devem ser feitos **na sua branch**.
5. Quando terminar, você entregará esse rascunho para revisão (Pull Request).
6. Se aprovado, seu conteúdo será **mergeado** na `main` e fará parte da folha oficial do fichário.

---

## 📌 Main (a folha oficial do fichário)

* Contém **apenas o que já foi revisado e aprovado**.
* Nunca use a `main` como rascunho.
* Depois de um merge, é nela que ficam as versões “reais” do projeto.

---

## 🔄 Fluxo no VS Code (sem terminal)

### 1) Atualizar a `main` local

1. Clique no nome da branch (canto inferior esquerdo) → escolha **main**.
2. Vá em **Source Control → … (More Actions) → Pull** (ou **Pull from origin/main**).
3. Pronto: sua `main` local está igual à nuvem.

---

### 2) Atualizar a sua branch com a `main`

1. Troque para sua branch de trabalho (`zafa-TelaCadastro`).

   * Se ela não existir ainda, clique em **+ Create new branch from…** e escolha `origin/main`.
2. Com sua branch ativa, vá em **Source Control → … → Merge Branch…**

   * Selecione **main** → isso leva as novidades da main para sua branch.
   * Se houver conflitos, o VS Code abrirá o **Merge Editor** (veja abaixo).

> 🔹 Alternativa avançada: **Rebase Current Branch → main** (mantém histórico linear, mas o merge é mais simples para começar).

---

### 3) Commitar, enviar e abrir Pull Request

1. Faça suas alterações normalmente.
2. Em **Source Control**, escreva a mensagem e clique em **✔ Commit**.
3. Clique em **Push** (ou **Publish Branch** se for a primeira vez).
4. O VS Code mostrará o botão **Create Pull Request** (com a extensão *GitHub Pull Requests and Issues*). Clique e siga as instruções.

---

### 4) Depois que o PR for aprovado

1. Volte para a `main` → faça **Pull** novamente.
2. (Opcional) Delete sua branch: **Source Control → … → Delete Branch…**

   * Para excluir também no remoto: **Remove Remote Branch**.

---

## 🔧 Resolvendo conflitos no Merge Editor

Se houver conflitos:

* O VS Code abre 3 colunas:
  **Current (sua branch)** | **Incoming (main)** | **Resultado**
* Clique em **Accept Current / Accept Incoming / Accept Both**.
* Depois, clique em **Mark as Resolved** e faça **Commit Merge**.
* Finalize com **Push**.

---

## ✅ Mini-checklist (GUI)

* **Trocar de branch**: canto inferior esquerdo.
* **Pull**: Source Control → … (More Actions).
* **Merge Branch…**: Source Control → … → Merge Branch → main.
* **Rebase… (opcional)**: Source Control → … → Rebase Current Branch → main.
* **Create Pull Request**: prompt do VS Code (com extensão GitHub).

---

## ⚠️ Erros comuns e como evitar

* **Esquecer de trocar de branch** → editar direto na `main` sem querer.
* **Confundir Fetch com Pull** → Fetch só busca informações; Pull busca **e aplica**.
* **Deixar branch desatualizada** → faça merge da `main` na sua branch com frequência para reduzir conflitos.