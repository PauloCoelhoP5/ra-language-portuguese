module.exports = {
    ra: {
        action: {
            add_filter: "Adicionar filtro",
            add: "Adicionar",
            back: "Voltar",
            bulk_actions: "1 item selecionado |||| %{smart_count} itens selecionados",
            cancel: "Cancelar",
            clear_input_value: "Limpar campo",
            clone: "Duplicar",
            confirm: "Confirmar",
            create: "Novo",
            create_item: "Novo %{item}",
            delete: "Eliminar",
            edit: "Editar",
            export: "Exportar",
            list: "Listar",
            refresh: "Atualizar",
            remove_filter: "Remover filtro",
            remove: "Remover",
            save: "Guardar",
            search: "Procurar",
            select_all: "Selecionar tudo",
            select_row: "Selecionar linha",
            show: "Mostrar",
            sort: "Ordenar",
            undo: "Desfazer",
            unselect: "Anular seleção",
            expand: "Expandir",
            close: "Fechar",
            open_menu: "Abrir menu",
            close_menu: "Fechar menu",
            update: "Atualizar",
            move_up: "Mover para cima",
            move_down: "Mover para baixo",
            open: "Abrir",
            toggle_theme: "Alternar tema",
            select_columns: "Selecionar colunas",
            clear_array_input: "Limpar lista",
            select_all_button: "Selecionar todos",
            remove_all_filters: "Remover todos os filtros"
        },
        boolean: {
            true: "Sim",
            false: "Não",
            null: " "
        },
        page: {
            create: "Novo %{name}",
            dashboard: "Painel de controlo",
            edit: "%{name} #%{id}",
            error: "Ocorreu um erro",
            list: "Listar %{name}",
            loading: "A carregar",
            not_found: "Não encontrado",
            show: "%{name} #%{id}",
            empty: "Ainda não existem registos em %{name}",
            invite: "Deseja criar um novo?",
            access_denied: "Acesso negado",
            authentication_error: "Erro de autenticação",
            placeholder_data_warning: "Problema de rede: falha ao atualizar os dados."
        },
        input: {
            file: {
                upload_several: "Arraste vários ficheiros para enviar ou clique para os selecionar.",
                upload_single: "Arraste o ficheiro para enviar ou clique para o selecionar."
            },
            image: {
                upload_several: "Arraste várias imagens para enviar ou clique para as selecionar.",
                upload_single: "Arraste uma imagem para enviar ou clique para selecionar um ficheiro."
            },
            references: {
                all_missing: "Não foi possível encontrar os dados das referências.",
                many_missing: "Pelo menos uma das referências fornecidas já não está disponível.",
                single_missing: "A referência fornecida já não está disponível."
            },
            password: {
                toggle_visible: "Ocultar palavra-passe",
                toggle_hidden: "Mostrar palavra-passe"
            }
        },
        message: {
            about: "Sobre",
            are_you_sure: "Tem a certeza?",
            bulk_delete_content: "Tem a certeza de que pretende eliminar este %{name}? |||| Tem a certeza de que pretende eliminar estes %{smart_count} itens?",
            bulk_delete_title: "Eliminar %{name} |||| Eliminar %{smart_count} %{name}",
            bulk_update_content: "Tem a certeza de que pretende atualizar este %{name}? |||| Tem a certeza de que pretende atualizar estes %{smart_count} itens?",
            bulk_update_title: "Atualizar %{name} |||| Atualizar %{smart_count} %{name}",
            delete_content: "Tem a certeza de que pretende eliminar?",
            delete_title: "Eliminar %{name} #%{id}",
            details: "Detalhes",
            error: "Ocorreu um erro e o seu pedido não foi concluído.",
            invalid_form: "O formulário não é válido. Verifique os erros.",
            loading: "A carregar a página. Por favor, aguarde.",
            no: "Não",
            not_found: "URL inválido ou ligação quebrada.",
            yes: "Sim",
            unsaved_changes: "Tem alterações não guardadas. Deseja mesmo sair sem guardar?",
            auth_error: "Erro de autorização"
        },
        navigation: {
            no_results: "Sem resultados",
            no_more_results: "A página %{page} está fora dos limites. Tente a página anterior.",
            page_out_of_boundaries: "Página %{page} fora dos limites",
            page_out_from_end: "Não é possível avançar além da última página",
            page_out_from_begin: "Não é possível recuar antes da primeira página",
            page_range_info: "%{offsetBegin}-%{offsetEnd} de %{total}",
            partial_page_range_info: "%{offsetBegin}-%{offsetEnd} de mais de %{offsetEnd}",
            current_page: "Página %{page}",
            page: "Ir para a página %{page}",
            first: "Ir para a primeira página",
            last: "Ir para a última página",
            next: "Seguinte",
            prev: "Anterior",
            page_rows_per_page: "Linhas por página:",
            skip_nav: "Saltar para o conteúdo",
            clear_filters: "Limpar filtros",
            no_filtered_results: "Sem resultados para o filtro atual",
        },
        sort: {
            sort_by: "Ordenar por %{field} %{order}",
            ASC: "crescente",
            DESC: "decrescente"
        },
        auth: {
            auth_check_error: "Por favor, inicie sessão para continuar",
            user_menu: "Perfil",
            username: "Utilizador",
            password: "Palavra-passe",
            sign_in: "Entrar",
            sign_in_error: "Erro de autenticação, tente novamente.",
            logout: "Sair"
        },
        notification: {
            updated: "Item atualizado com sucesso |||| %{smart_count} itens foram atualizados com sucesso",
            created: "Item criado com sucesso",
            deleted: "Item removido com sucesso |||| %{smart_count} itens foram removidos com sucesso",
            bad_item: "Item inválido",
            item_doesnt_exist: "Este item já não existe",
            http_error: "Erro de comunicação com o servidor.",
            data_provider_error: "Erro do dataProvider, consulte a consola para mais detalhes.",
            i18n_error: "Não foi possível carregar as traduções para o idioma especificado.",
            canceled: "Ação cancelada.",
            logged_out: "A sua sessão terminou. Por favor, inicie sessão novamente.",
            not_authorized: "Não tem autorização para aceder a este recurso.",
            application_update_available: "Uma nova versão está disponível."
        },
        validation: {
            required: "Obrigatório",
            minLength: "Deve ter pelo menos %{min} caracteres",
            maxLength: "Deve ter no máximo %{max} caracteres",
            minValue: "Deve ser %{min} ou superior",
            maxValue: "Deve ser %{max} ou inferior",
            number: "Deve ser um número",
            email: "Deve ser um email válido",
            oneOf: "Deve ser uma das seguintes opções: %{options}",
            regex: "Deve corresponder ao formato (regexp): %{pattern}"
        },
        saved_queries: {
            label: "Pesquisas guardadas",
            query_name: "Nome da pesquisa",
            new_label: "Guardar pesquisa atual...",
            new_dialog_title: "Guardar pesquisa como",
            remove_label: "Remover pesquisa guardada",
            remove_label_with_name: 'Remover pesquisa "%{name}"',
            remove_dialog_title: "Remover pesquisa guardada?",
            remove_message: "Tem a certeza de que pretende remover esta pesquisa da sua lista?",
            help: "Filtre os resultados e guarde esta pesquisa para utilizar mais tarde."
        },
        configurable: {
            customize: "Personalizar",
            configureMode: "Configurar esta página",
            Datagrid: {
                unlabeled: "Coluna sem rótulo #%{column}",
                title: "#%{title}"
            },
            inspector: {
                title: "Inspector",
                content: "Passe o cursor sobre os elementos da interface para os configurar",
                reset: "Repor definições",
                hideAll: "Esconder tudo",
                showAll: "Mostrar tudo"
            },
            SimpleList: {
                primaryText: "Texto principal",
                secondaryText: "Texto secundário",
                tertiaryText: "Texto terciário",
                title: "#%{title}"
            },
            SimpleForm: {
                title: "#%{title}",
                unlabeled: "Sem rótulo #%{column}"
            },
        },
    }
}
