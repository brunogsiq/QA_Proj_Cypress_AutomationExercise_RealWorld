--Etapa VSCode

    Branch:
        Branch é uma página de fichário, que poderá ser ou não adicionada ao fichário (no caso projeto)
            Digamos que a brach (que não será nunca a Main), será uma página de rascunho.

        O mundo perfeito, é você ter uma branch, que deixe claro, onde está trabalhando", no caso, em qual parte, página do projeto

        No vsCode, para criar uma branch:
            1 - Clica em Main no canto inferior esquerde.
            2 - Escolhe opção create new branch from "origin/main - da nuvem"
            3 - Dá um nome que identifique onde está trabalhando. Exemplo: zafa-TelaCadastro
                Ps: não utilize caracteres especiais, espaços, nada;
            4 - Verifique sempre se está na sua branch de desenvolvimento, pois, caso não esteja, vai lascar tudo, pois você poderá estar desenvolvendo sua parte na folha de rascunho de outra pessoa.
            5 - Verifica no canto inferior esquerdo pelo nome.
            6 - Seus envios, ou seja, commits, deverão ser realizados da sua branch
            7 - o Líder, vai verificar se o que fez está correto, e aceitar ou não, solicitar uma correção ou não. 
            8 - Ao aceitar, sua parte estará o que o povo falar de "Mergeado".


        Main:
            É a página principal, ou seja, aquela que contém tudo que é real, que é produção", nunca deverá ser feito nada nela, nem rascunho.

--Etapa repositório (no nosso caso, GitHub, mas poderia ser no azureDevops, no jira, gitbucket, gitlab, e por aí vai)   

    Depois que considerar que seu desenvolvimento está ok, e já realizou o commit do seu pc, vai ser necessário abrir a solicitação de integração, ou o famoso, Pull Request

    Será preciso acessar o site do repositório e abrir o "Pull request".

    Alguém, como o líder, vai verificar seu pr (Pull request), aprovar ou solicitar correção

    Ao aprovar, seu desenvolvimento é agregado ao projeto.

--Etapa VsCode

    Após "coisas feitas" deixarem de ser um rascunho e se tornarem parte do projeto, ou seja, faz parte da folha principal do fichário, é a hora de buscar essas atualizações na MAIN.

    Fetch from origin/Main da nuvem para sua Main
    Fetch from Main para sua Branch
        Ou seja:
            sua Main, tá desatulizada, ai atualiza.
            Depois que a sua ta atualizada, envia para seu rascunho e continua.

    Creio que este é o básico de um fluxo.




