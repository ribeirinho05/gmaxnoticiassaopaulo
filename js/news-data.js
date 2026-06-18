/* GMAX NOTÍCIAS — Base de Dados v2.0
   Atualizado: 18/06/2026 09:29 */

const CATEGORIAS = {
    politica: { nome: 'Política', cor: '#E63946', icone: 'account_balance', gradient: 'linear-gradient(135deg, #E63946, #D62839)' },
    economia: { nome: 'Economia', cor: '#2B9348', icone: 'trending_up', gradient: 'linear-gradient(135deg, #2B9348, #55A630)' },
    cidade: { nome: 'São Paulo', cor: '#457B9D', icone: 'location_city', gradient: 'linear-gradient(135deg, #457B9D, #1D3557)' },
    esportes: { nome: 'Esportes', cor: '#FB8500', icone: 'sports_soccer', gradient: 'linear-gradient(135deg, #FB8500, #FFB703)' },
    brasil: { nome: 'Brasil', cor: '#0077B6', icone: 'flag', gradient: 'linear-gradient(135deg, #0077B6, #00B4D8)' },
    internacional: { nome: 'Mundo', cor: '#6A4C93', icone: 'public', gradient: 'linear-gradient(135deg, #6A4C93, #8B5FBF)' },
    eventos: { nome: 'Eventos', cor: '#C1121F', icone: 'event', gradient: 'linear-gradient(135deg, #C1121F, #E5383B)' },
};

const noticias = [
    {
        id: 1, categoria: 'cidade',
        titulo: 'São Paulo em Alerta: Frente Fria Traz Mínima de 8°C Nesta Quinta-feira',
        resumo: 'A capital paulista se prepara para uma quinta-feira de frio intenso, com a previsão de que os termômetros registrem uma temperatura mínima de 8°C. A frente fria que atua na região deve se intensificar, prometendo um dia gelado para os moradores.',
        imagem: 'https://images.pexels.com/photos/16063741/pexels-photo-16063741.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '6h atrás'
    },
    {
        id: 2, categoria: 'cidade',
        titulo: 'São Paulo lidera ranking nacional de Selos Arte concedidos a artesãos',
        resumo: 'O estado de São Paulo alcançou a marca de maior número de Selos Arte concedidos a produtores artesanais em todo o país. A conquista reforça a valorização e o reconhecimento do setor artesanal paulista.',
        imagem: 'https://images.pexels.com/photos/12497049/pexels-photo-12497049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: 'agora'
    },
    {
        id: 3, categoria: 'cidade',
        titulo: 'São Paulo Reduz Mortes no Trânsito em 10,1% no Balanço de Maio',
        resumo: 'O Estado de São Paulo registrou uma queda de 10,1% no número de mortes no trânsito durante o mês de maio. Os dados indicam uma redução significativa nos óbitos decorrentes de acidentes nas vias paulistas.',
        imagem: 'https://images.pexels.com/photos/4062988/pexels-photo-4062988.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '1d atrás'
    },
    {
        id: 4, categoria: 'cidade',
        titulo: 'Defesa Civil de SP alerta para queda de temperaturas no estado',
        resumo: 'A Defesa Civil de São Paulo emitiu um alerta sobre a previsão de queda nas temperaturas em todo o estado. O órgão orienta a população a se preparar para as mudanças climáticas esperadas, visando a segurança e o bem-estar de todos.',
        imagem: 'https://images.pexels.com/photos/12497049/pexels-photo-12497049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '9h atrás'
    },
    {
        id: 5, categoria: 'economia',
        titulo: 'Representantes Comerciais: Peça-Chave em Cada Setor da Maior Economia do Brasil em SP',
        resumo: 'Os representantes comerciais demonstram uma presença abrangente em São Paulo, atuando em cada setor da maior economia do Brasil. Essa capilaridade profissional destaca a relevância fundamental da categoria para o dinamismo e a interconexão do mercado paulista.',
        imagem: 'https://images.pexels.com/photos/10531120/pexels-photo-10531120.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '14h atrás'
    },
    {
        id: 6, categoria: 'cidade',
        titulo: 'IBGE Marca Presença em Feira de Geotecnologias na Capital Paulista',
        resumo: 'O Instituto Brasileiro de Geografia e Estatística (IBGE) marca sua presença na feira de geotecnologias realizada em São Paulo. A participação da instituição destaca sua relevância e contribuição no setor.',
        imagem: 'https://images.pexels.com/photos/16063741/pexels-photo-16063741.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '15h atrás'
    },
    {
        id: 7, categoria: 'politica',
        titulo: 'MDHC promove encontro em SP para fortalecer inclusão e o Novo Viver sem Limite',
        resumo: 'O Ministério dos Direitos Humanos e da Cidadania (MDHC) promove em São Paulo um encontro nacional de gestores da política para pessoas com deficiência. O evento visa debater e fortalecer iniciativas cruciais, com foco na inclusão no mercado de trabalho e no programa Novo Viver sem Limite.',
        imagem: 'https://images.pexels.com/photos/30256874/pexels-photo-30256874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '14h atrás'
    },
    {
        id: 8, categoria: 'cidade',
        titulo: 'Saneamento: Seis Cidades de SP Conquistam Nota Máxima no Brasil',
        resumo: 'Seis municípios do estado de São Paulo alcançaram a nota máxima em saneamento básico no Brasil. Este reconhecimento destaca a excelência e o compromisso dessas cidades com a infraestrutura e a qualidade de vida de seus habitantes.',
        imagem: 'https://images.pexels.com/photos/12497049/pexels-photo-12497049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '14h atrás'
    },
    {
        id: 9, categoria: 'brasil',
        titulo: 'Motorista morre após colidir com portaria em Alphaville; investigação busca esclarecimentos',
        resumo: 'Um motorista faleceu em Alphaville, São Paulo, após seu veículo colidir contra a portaria de um condomínio na região. As autoridades iniciaram uma investigação para apurar as causas do acidente e os detalhes que levaram à morte do condutor, buscando esclarecer o ocorrido.',
        imagem: 'https://images.pexels.com/photos/14357175/pexels-photo-14357175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '1d atrás'
    },
    {
        id: 10, categoria: 'brasil',
        titulo: 'Instrutores de salto presos em SP se negam a depor sobre jovem lançado sem cordas',
        resumo: 'Instrutores de salto foram presos em São Paulo após um jovem ser lançado sem equipamentos de segurança. Os detidos se recusaram a prestar depoimento à polícia, mantendo o silêncio sobre o incidente.',
        imagem: 'https://images.pexels.com/photos/14357175/pexels-photo-14357175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '1d atrás'
    },
    {
        id: 11, categoria: 'eventos',
        titulo: 'Tempo firme predomina em São Paulo nesta quinta-feira (18)',
        resumo: 'A capital paulista terá uma quinta-feira (18) de tempo estável. A previsão indica predominância de sol e ausência de chuvas, garantindo um dia de condições climáticas firmes em toda a região metropolitana.',
        imagem: 'https://images.pexels.com/photos/16063741/pexels-photo-16063741.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '10h atrás'
    },
    {
        id: 12, categoria: 'eventos',
        titulo: 'Diário Oficial de SP: Concurso Público é aberto com Edital RH nº 021/2026',
        resumo: 'O Estado de São Paulo anunciou a abertura de um novo Concurso Público. O Edital RH nº 021/2026, com todos os detalhes e requisitos, foi oficialmente divulgado no Diário Oficial do Estado. Candidatos interessados devem ficar atentos às próximas etapas.',
        imagem: 'https://images.pexels.com/photos/30354454/pexels-photo-30354454.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '1d atrás'
    },
    {
        id: 13, categoria: 'cidade',
        destaque: true,
        titulo: 'DDI de SP atualiza e consolida textos constitucionais estaduais para acesso digital',
        resumo: 'O Departamento de Documentação e Informação (DDI) de SP atualizou e consolidou os textos constitucionais estaduais, disponíveis digitalmente para consulta e impressão, com revisão semestral. Constituições como as de 1947 e 1967 foram modernizadas; as de 1891 e 1935 mantêm o formato original.',
        imagem: 'https://images.pexels.com/photos/12497049/pexels-photo-12497049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Assembleia Legislativa SP', tempo: '27 min atrás'
    },
    {
        id: 14, categoria: 'politica',
        destaque: true,
        titulo: 'Câmara de SP debate projeto de revitalização urbana com incentivos fiscais; Fazenda alerta',
        resumo: 'A Comissão de Política Urbana da Câmara de SP realizou audiência para debater projetos de vereadores. Destaque foi o PL 828/2025, que cria as Áreas de Revitalização Compartilhada com incentivos fiscais para a iniciativa privada. No entanto, a Secretaria Municipal da Fazenda alertou para possíveis pr',
        imagem: 'https://www.saopaulo.sp.leg.br/wp-content/uploads/2026/06/55341589074_8fe845b827_c.jpg',
        autor: 'Câmara Municipal de São Paulo', tempo: '30 min atrás'
    },
    {
        id: 15, categoria: 'politica',
        destaque: true,
        titulo: 'CCJ da Câmara de SP aprova dezenas de projetos e avança em debate sobre ruídos',
        resumo: 'A Comissão de Constituição, Justiça e Legislação Participativa (CCJ) da Câmara Municipal de São Paulo aprovou 72 de 95 propostas em sua última reunião, com alta produtividade. Debateu também o Projeto de Lei 403/2026, que altera regras de fiscalização de ruídos e perturbação do sossego na capital. A',
        imagem: 'https://www.saopaulo.sp.leg.br/wp-content/uploads/2026/06/55341601645_efb6e56150_c.jpg',
        autor: 'Câmara Municipal de São Paulo', tempo: '30 min atrás'
    },
    {
        id: 16, categoria: 'politica',
        titulo: 'Câmara de São Paulo Moderniza Acesso a Projetos Legislativos e Normas desde 1948',
        resumo: 'A Câmara Municipal de São Paulo modernizou suas plataformas, facilitando a consulta de projetos legislativos desde 1948. Cidadãos podem pesquisar Projetos de Lei, Resolução, Decreto Legislativo e Emenda à Lei Orgânica através de filtros detalhados, incluindo tipo, ano e autoria de vereadores.',
        imagem: 'https://images.pexels.com/photos/31283302/pexels-photo-31283302.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Câmara Municipal de São Paulo', tempo: '30 min atrás'
    },
    {
        id: 17, categoria: 'politica',
        titulo: 'Câmara de SP Simplifica Acesso à Legislação Municipal Desde 1892',
        resumo: 'O portal de legislação municipal de São Paulo oferece acesso facilitado a um vasto acervo de normas. É possível pesquisar leis, decretos e resoluções desde 1892, com texto integral, utilizando filtros como tipo, número, ano e autor da norma.',
        imagem: 'https://images.pexels.com/photos/31283302/pexels-photo-31283302.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Câmara Municipal de São Paulo', tempo: '30 min atrás'
    },
    {
        id: 18, categoria: 'cidade',
        titulo: 'Câmara de SP abre consulta pública a registros completos de sessões e audiências',
        resumo: 'A Câmara Municipal de São Paulo disponibiliza consulta pública ao registro parlamentar. Cidadãos podem acessar a íntegra das Sessões Plenárias e Audiências Públicas, organizadas cronologicamente para consulta, download e impressão.',
        imagem: 'https://images.pexels.com/photos/31283302/pexels-photo-31283302.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Câmara Municipal de São Paulo', tempo: '30 min atrás'
    },
    {
        id: 19, categoria: 'cidade',
        titulo: 'Câmara de SP: Prestação de Contas Mensal da Mesa Diretora Acessível aos Cidadãos',
        resumo: 'A Mesa Diretora da Câmara Municipal de São Paulo divulga mensalmente suas atividades, garantindo transparência aos paulistanos. Todos os dados estão disponíveis no portal oficial, apresentados em formato jornalístico e institucional. Cidadãos podem consultar o histórico completo de prestações de con',
        imagem: 'https://images.pexels.com/photos/31283302/pexels-photo-31283302.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Câmara Municipal de São Paulo', tempo: '30 min atrás'
    },
    {
        id: 20, categoria: 'cidade',
        titulo: 'Câmara SP: CTEO detalha desenvolvimento regional em Indicadores Metropolitano e Paulistano',
        resumo: 'A Consultoria Técnica de Economia e Orçamento (CTEO) da Câmara Municipal de São Paulo publica mensalmente os boletins ‘Indicador Metropolitano’ e ‘Indicador Paulistano’. As publicações oferecem estudos e dados essenciais sobre índices que fundamentam o desenvolvimento regional.',
        imagem: 'http://www.saopaulo.sp.leg.br/wp-content/uploads/img/images/indicadores/Topo_Indicadores.png',
        autor: 'Câmara Municipal de São Paulo', tempo: '30 min atrás'
    },
    {
        id: 21, categoria: 'brasil',
        titulo: 'Bauru: Homem é preso por homicídio a facadas em frente a bar; suspeito alega defesa',
        resumo: 'Um homem de 52 anos foi preso em Bauru (SP) na madrugada desta quinta (18) por suspeita de matar a facadas Alex da Silva dos Santos, de 38. O crime ocorreu em frente a um bar no Parque Bauru. O suspeito, encontrado com a faca, alegou legítima defesa e teve a prisão convertida em preventiva.',
        imagem: 'https://s2-g1.glbimg.com/vKbvz8JskyviDeW22DTgJsRHLA8=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/w/I/Qm5jNTTmmj9u73jBoNlw/g1-13-.jpg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 22, categoria: 'politica',
        titulo: 'Prêmio Santo Dias: Alesp celebra luta por Direitos Humanos com honraria anual',
        resumo: 'O Prêmio Santo Dias de Direitos Humanos, da Alesp, celebra anualmente indivíduos e entidades que se destacam na defesa dos direitos fundamentais. Instituído em 1996, homenageia Santo Dias da Silva, líder operário assassinado em 1979 na ditadura militar e símbolo da luta social.',
        imagem: 'https://images.pexels.com/photos/30256874/pexels-photo-30256874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Assembleia Legislativa SP', tempo: '29 min atrás'
    },
    {
        id: 23, categoria: 'politica',
        titulo: 'Alesp Modifica Resolução 766/94: Parágrafo do Artigo 23 Ganha Nova Redação',
        resumo: 'A Assembleia Legislativa do Estado de São Paulo (Alesp) atualizou a Resolução nº 766, de 16 de dezembro de 1994. O § 4º do artigo 23 da referida norma agora passa a vigorar com uma nova redação, promovendo uma alteração na legislação paulista.',
        imagem: 'https://images.pexels.com/photos/30256874/pexels-photo-30256874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Assembleia Legislativa SP', tempo: '27 min atrás'
    },
    {
        id: 24, categoria: 'politica',
        titulo: 'Alesp Lança Sistema Gratuito para Cidadãos Acompanharem Mudanças em Leis Estaduais',
        resumo: 'A Assembleia Legislativa de São Paulo (Alesp) disponibiliza um sistema gratuito que permite aos cidadãos acompanhar alterações em normas estaduais de seu interesse. Após um breve cadastro no portal, o usuário recebe notificações automáticas por e-mail, garantindo acesso facilitado à informação públi',
        imagem: 'https://images.pexels.com/photos/30256874/pexels-photo-30256874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Assembleia Legislativa SP', tempo: '27 min atrás'
    },
    {
        id: 25, categoria: 'politica',
        titulo: 'Legislativo Amplia Diálogo Cidadão e Ações por Paz e Igualdade de Gênero',
        resumo: 'O órgão legislativo abre canal para receber sugestões de proposições de lei, disponibilizando um manual em parceria com a ProTeste. A entidade também intensifica ações do CONPAZ no combate à discriminação e atua na garantia da participação feminina e na implementação de políticas públicas para mulhe',
        imagem: 'https://images.pexels.com/photos/30256874/pexels-photo-30256874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Assembleia Legislativa SP', tempo: '27 min atrás'
    },
    {
        id: 26, categoria: 'cidade',
        titulo: 'Assembleia de SP simplifica legislação com consolidação de leis estaduais',
        resumo: 'A Assembleia de SP simplifica a legislação estadual, consolidando leis por temas para facilitar o acesso da população. O projeto, via Mesa Diretora e CCJ, abrange adequações constitucionais e legislação de deficiência, com aval do Executivo, Judiciário e MP.',
        imagem: 'https://images.pexels.com/photos/12497049/pexels-photo-12497049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Assembleia Legislativa SP', tempo: '27 min atrás'
    },
    {
        id: 27, categoria: 'cidade',
        titulo: 'Incêndio devastador na Vila Andrade desabriga 50 famílias na zona sul de SP',
        resumo: 'Um incêndio de grandes proporções atingiu uma comunidade na Vila Andrade, zona sul de São Paulo, na madrugada desta quinta-feira (18). Ao menos 50 famílias foram desabrigadas após a destruição de imóveis de madeira e materiais improvisados.',
        imagem: 'https://images.pexels.com/photos/12497049/pexels-photo-12497049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: '', tempo: 'agora'
    },
    {
        id: 28, categoria: 'politica',
        titulo: 'PF deflagra nova fase da Compliance Zero com mandados contra Banco Master e Daniel Vorcaro',
        resumo: 'A Polícia Federal deflagrou nesta quinta-feira a nova fase da Operação Compliance Zero. Estão sendo cumpridos 18 mandados de busca e apreensão que investigam supostas irregularidades envolvendo Daniel Vorcaro e o Banco Master.',
        imagem: 'https://images.pexels.com/photos/30256874/pexels-photo-30256874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'José Marques', tempo: 'agora'
    },
    {
        id: 29, categoria: 'brasil',
        titulo: 'Preso em Rondonópolis suspeito de importunar sexualmente mulheres em academias ao ar livre',
        resumo: 'Um homem de 25 anos foi preso em flagrante pela Polícia Civil em Rondonópolis (MT) nesta quarta-feira (17). Ele é suspeito de importunação sexual contra mulheres que praticavam exercícios físicos em espaços públicos, como o caso de uma manicure. A Delegacia da Mulher (DEDM) conduziu a prisão após in',
        imagem: 'https://s2-g1.glbimg.com/UKhn_BHRclKInZS_zeEND_ko9ho=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/i/2/MIDb0YTTuvTGWgMPQyUA/whatsapp-image-2026-06-17-at-10.17.24.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 30, categoria: 'brasil',
        titulo: 'Umbaúba: Falso médico é investigado após morte de paciente em clínica municipal',
        resumo: 'A Polícia Civil de Sergipe investiga um homem por exercício ilegal da medicina na Clínica Municipal 24 Horas de Umbaúba. Ele é suspeito de usar o registro profissional do irmão médico e está sob apuração após a morte de uma paciente atendida na unidade. Até o momento, não há elementos que liguem dir',
        imagem: 'https://s2-g1.glbimg.com/L2tFnRJZId9uSPO_reguWeOaETk=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/w/2/1IeABcTx2AS9dA6aquVw/captura-de-tela-2025-12-26-103104.png',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 31, categoria: 'brasil',
        titulo: 'Breaking Bet: Polícia mira grupo que desviava dinheiro de golpes via apostas online',
        resumo: 'A Polícia Civil da Paraíba deflagrou a Operação Breaking Bet, cumprindo cinco mandados em quatro estados. O alvo é um grupo que usava plataformas de apostas virtuais para desviar valores de golpes cibernéticos. A investigação começou após uma vítima ser lesada por um e-mail fraudulento de banco.',
        imagem: 'https://s2-g1.glbimg.com/FKv9IDeVRVc0W7080i7z8MTNpn0=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/B/j/IfwGB2TAAlcLcAcO9msg/opercaao-breakingbet-.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 32, categoria: 'brasil',
        titulo: 'Operação Conto da Sorte cumpre mandados contra bets ilegais bilionárias em SP, PE e CE',
        resumo: 'A Operação Conto da Sorte cumpriu 14 mandados de busca e apreensão nesta quinta (18) em São Paulo, Pernambuco e Ceará, visando um esquema bilionário de bets ilegais. A investigação apura lavagem de dinheiro e exploração de jogos de azar, mas não houve prisões nesta fase.',
        imagem: 'https://s2-g1.glbimg.com/TWyUE34NWTe4WPNeoXKu0iYh09c=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/A/p/kzAoEmSay5pJViYEXVDg/cedulas.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 33, categoria: 'brasil',
        titulo: 'Fundador e CEO da Capital Factory, Joshua Baer morre em queda de jato no Texas',
        resumo: 'Joshua Baer, fundador e CEO da Capital Factory, uma renomada aceleradora de startups, faleceu após um acidente com um jato executivo no Texas, EUA. A aeronave caiu em uma rodovia na cidade de Laredo na noite de terça-feira (16), após pilotos relatarem problemas mecânicos. Baer era uma figura proemin',
        imagem: 'https://s2-g1.glbimg.com/3tZZWljiAXpcn02YCmp9ItgRg10=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/i/B/j27YeeRfGmrkv2sN3hyw/ap26168784151178.jpg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 34, categoria: 'internacional',
        titulo: 'PF mira Jaques Wagner e banqueiro em nova fase de operação; Copa e acordo EUA-Irã em destaque',
        resumo: 'A Polícia Federal deflagra a 9ª fase da Operação Compliance Zero, com o senador Jaques Wagner e o banqueiro Augusto Lima entre os alvos por investigações ligadas ao banco Master. No esporte, a Copa do Mundo inicia sua segunda rodada. No cenário internacional, o acordo entre EUA e Irã tem seus próxim',
        imagem: 'https://images.pexels.com/photos/17609924/pexels-photo-17609924.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 35, categoria: 'economia',
        titulo: 'A Fazenda 18: Record abre negociação de cotas para estreia em setembro',
        resumo: 'A Record deu início às negociações com o mercado publicitário para as cotas de patrocínio de A Fazenda 18. O reality show está previsto para estrear em setembro e terá Adriane Galisteu no comando.',
        imagem: 'https://f.i.uol.com.br/fotografia/2025/12/17/176601081369432fbde8139_1766010813_3x2_xl.jpg',
        autor: 'Gabriel Vaquer', tempo: 'agora'
    },
    {
        id: 36, categoria: 'economia',
        titulo: 'Câmara aprova PEC que transforma igrejas em quase zonas francas tributárias',
        resumo: 'A Câmara dos Deputados aprovou uma Proposta de Emenda à Constituição (PEC) que concede ampla imunidade tributária a instituições religiosas. A medida estende a isenção fiscal para quase todas as compras de bens e serviços ligados ao seu funcionamento e às suas obras sociais, equiparando-as a zonas f',
        imagem: 'https://images.pexels.com/photos/31283302/pexels-photo-31283302.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: '', tempo: 'agora'
    },
    {
        id: 37, categoria: 'economia',
        titulo: 'Defesa de Augusto Lima, ex-sócio de Daniel Vorca, diz que buscas da PF são desnecessárias',
        resumo: 'A defesa de Augusto Lima, ex-sócio de Daniel Vorca, pronunciou-se hoje sobre uma operação da Polícia Federal. Os advogados do empresário consideram as buscas realizadas na ação como desnecessárias.',
        imagem: 'https://s2-valor.glbimg.com/SBdtstvRR5lk2sP48rqb9_V6jeg=/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2026/9/W/AtqR5XTMymSAMRBHNZMw/augusto-lima-banco-pleno.avif',
        autor: 'Valor Econômico', tempo: 'agora'
    },
    {
        id: 38, categoria: 'economia',
        titulo: 'Augusto Lima: Ex-sócio de Vorcaro é alvo em nova fase da Operação Compliance Zero',
        resumo: 'Augusto Ferreira Lima, ex-sócio de Daniel Vorcaro, tornou-se alvo da nova fase da Operação Compliance Zero. O baiano é um dos focos da mais recente etapa da ação.',
        imagem: 'https://s2-valor.glbimg.com/SBdtstvRR5lk2sP48rqb9_V6jeg=/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2026/9/W/AtqR5XTMymSAMRBHNZMw/augusto-lima-banco-pleno.avif',
        autor: 'Valor Econômico', tempo: 'agora'
    },
    {
        id: 39, categoria: 'economia',
        titulo: 'Tesouro IPCA+ de curto prazo dispara e atinge recorde de 8,5% após Fed e Copom',
        resumo: 'O Tesouro IPCA+ de curto prazo bateu recorde histórico, atingindo mais de 8,5% de rentabilidade. O feito ocorre após decisões do Fed e Copom, e os títulos prefixados já ampliam o fosso para a Selic, elevando as expectativas de novas altas na taxa básica de juros.',
        imagem: 'https://www.infomoney.com.br/wp-content/uploads/2026/06/sasun-bughdaryan-XbYYazLZrzE-unsplash.jpg?fit=300%2C128&quality=70&strip=all',
        autor: 'Paulo Barros', tempo: 'agora'
    },
    {
        id: 40, categoria: 'esportes',
        titulo: 'Português domina passes certos na 1ª rodada da Copa 2026; veja top 10',
        resumo: 'Um jogador português lidera o ranking de passes certos na primeira rodada da Copa do Mundo de 2026, superando espanhóis. Nos 24 jogos disputados, a fase inicial do torneio registrou um total de 21.969 passes, com o top 10 dos atletas mais precisos já revelado.',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/06/18/17817836186a33dc42e6d4b_1781783618_3x2_xl.jpg',
        autor: '', tempo: 'agora'
    },
    {
        id: 41, categoria: 'esportes',
        titulo: 'Copa do Mundo 2026: Rodada Inicial Registra Mais de 50 Gols Marcados',
        resumo: 'A primeira rodada da Copa do Mundo de 2026 demonstrou um alto poder ofensivo. Mais de 50 jogadores diferentes já balançaram as redes, indicando um início de torneio com grande volume de gols e emoção para os torcedores.',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/06/18/17817582086a3379006b9a4_1781758208_3x2_rt.jpg',
        autor: 'Sandro Macedo', tempo: 'agora'
    },
    {
        id: 42, categoria: 'esportes',
        titulo: 'Torcedores vaiam pausas para hidratação da FIFA em jogos da Copa nos EUA e Canadá',
        resumo: 'Torcedores manifestaram descontentamento com as pausas obrigatórias para hidratação da FIFA durante jogos da Copa do Mundo nesta quarta-feira. As vaias foram ouvidas em estádios de Dallas e Toronto, em partidas envolvendo Inglaterra, Croácia, Gana e Panamá.',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/06/18/17817828916a33d96be028a_1781782891_3x2_rt.jpg',
        autor: 'Nick Mulvenney', tempo: 'agora'
    },
    {
        id: 43, categoria: 'esportes',
        titulo: 'Copa 2030: Portugal co-anfitrião e os desafios históricos dos Mundiais',
        resumo: 'A co-organização da Copa do Mundo de 2030 por Portugal levanta questões sobre os desafios enfrentados por anfitriões anteriores. Protestos no Brasil, acusações contra o Qatar e promessas de desenvolvimento na África do Sul marcam o histórico recente dos Mundiais.',
        imagem: 'https://images.pexels.com/photos/35142168/pexels-photo-35142168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: '', tempo: 'agora'
    },
    {
        id: 44, categoria: 'esportes',
        titulo: 'Copa do Mundo: Palco de Emoção e Celebração da Diversidade Cultural',
        resumo: 'A Copa do Mundo se destaca como um evento que transcende o esporte, evidenciando a rica tapeçaria da diversidade cultural humana. Através dos hinos nacionais e da plateia vibrante, o torneio ressalta a importância de valorizar e respeitar as inúmeras culturas e línguas que enriquecem nosso planeta.',
        imagem: 'https://images.pexels.com/photos/35142168/pexels-photo-35142168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: '', tempo: 'agora'
    },
    {
        id: 45, categoria: 'esportes',
        titulo: 'Copa 2026: FIFA implementa patches personalizados em uniformes das seleções',
        resumo: 'A FIFA implementou o uso de patches personalizados nas camisas dos jogadores para a Copa do Mundo de 2026. A medida visa diferenciar os uniformes, com os distintivos divididos em cinco categorias distintas.',
        imagem: 'https://images.pexels.com/photos/35142168/pexels-photo-35142168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Gabriel Serpa', tempo: '28 min atrás'
    },
    {
        id: 46, categoria: 'esportes',
        titulo: 'Grupo L: Inglaterra derrota Croácia por 4 a 2 na Copa do Mundo em Dallas',
        resumo: 'A Inglaterra demonstrou força ao vencer a Croácia por 4 a 2 na primeira fase da Copa do Mundo, em um dos duelos mais esperados. O confronto do Grupo L ocorreu no estádio AT&T, em Dallas, na tarde de quarta-feira (17), com 70.389 espectadores.',
        imagem: 'https://images.pexels.com/photos/35142168/pexels-photo-35142168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Claudinei Queiroz', tempo: '59 min atrás'
    },
    {
        id: 47, categoria: 'esportes',
        titulo: 'Copa do Mundo: Primeira rodada gera decepções e frustrações entre favoritos',
        resumo: 'A primeira rodada da Copa do Mundo já gerou frustrações significativas. Seleções que chegaram ao Mundial com grande expectativa não conseguiram corresponder em seus primeiros confrontos.',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/06/luis_diaz-e1781753867420.jpg?w=200',
        autor: 'gabrielteles', tempo: 'agora'
    },
    {
        id: 48, categoria: 'esportes',
        titulo: 'Vozinha, Goleiro de Cabo Verde, Vira Fenômeno Global aos 40 Anos na Copa',
        resumo: 'Aos 40 anos e sem clube, o goleiro Vozinha, de Cabo Verde, emergiu como herói improvável na Copa do Mundo ao brilhar contra a Espanha. Sua atuação decisiva resultou numa explosão de popularidade, elevando seus seguidores no Instagram de 50 mil para mais de 13 milhões. Eleito melhor em campo pela FIF',
        imagem: 'https://s2-ge.glbimg.com/B0VZ8Ahsz8S3Sk63P4rCw6wQg8Q=/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/w/F/MsBkeAQles34N89B9LKw/2026-06-15t161823z-924299842-up1em6f19al37-rtrmadp-3-soccer-worldcup-esp-cpv.jpg',
        autor: 'GE (Globo Esporte)', tempo: 'agora'
    },
    {
        id: 49, categoria: 'esportes',
        titulo: 'Acusado de manipulação, atacante da Costa do Marfim é barrado no Canadá e desfalca time',
        resumo: 'Elye Wahi, atacante titular da Costa do Marfim, não enfrentará a Alemanha em Toronto neste sábado. O jogador, investigado por suposta manipulação de resultados na França, foi barrado no Canadá por não obter as autorizações administrativas necessárias. Ele aguardará a delegação nos EUA e seguirá na C',
        imagem: 'https://s2-ge.glbimg.com/Y2yaO1hUGLLYIpXSYvq1jeGak_U=/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/Q/i/pCRHfuSgqGmWzalpdbZg/2026-06-15t002158z-6729964-up1em6f010kml-rtrmadp-3-soccer-worldcup-civ-ecu.jpg',
        autor: 'GE (Globo Esporte)', tempo: 'agora'
    },
    {
        id: 50, categoria: 'brasil',
        titulo: 'Inter Alia: Nova peça de Suzie Miller estreia no Brasil com Drica Moraes e Caco Ciocler',
        resumo: 'A dramaturga australiana Suzie Miller, conhecida por "Prima Facie", estreia sua nova peça "Inter Alia" no Brasil em julho. Após sucesso em Londres, a montagem brasileira será dirigida por Rodrigo Portella e contará com Drica Moraes, Caco Ciocler e Caio Passos no elenco.',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/06/17/17817257036a32fa07d758a_1781725703_3x2_rt.jpg',
        autor: '', tempo: 'agora'
    },
    {
        id: 51, categoria: 'brasil',
        titulo: 'Educação Financeira Brasileira Chega a Crianças na China',
        resumo: 'Crianças que vivem na China estão aprendendo a economizar e administrar o próprio dinheiro. A iniciativa utiliza uma metodologia brasileira de educação financeira para capacitar os jovens.',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/06/16/17816219546a3164c21afe9_1781621954_3x2_xl.jpg',
        autor: 'Victória Pacheco', tempo: 'agora'
    },
    {
        id: 52, categoria: 'brasil',
        titulo: 'Mãe de Isis Valverde se pronuncia após ex-cozinheira pedir R$ 400 mil na Justiça',
        resumo: 'Rosalba Nable, mãe de Isis Valverde, veio a público defender a filha em meio à repercussão de um processo trabalhista. Uma ex-cozinheira da atriz moveu a ação, solicitando cerca de R$ 400 mil de indenização.',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/03/06/177283353069ab4afa227d2_1772833530_3x2_rt.jpg',
        autor: 'Leonardo Volpato', tempo: 'agora'
    },
    {
        id: 53, categoria: 'brasil',
        titulo: 'Água Termal: um ingrediente, alto preço. Desvendamos sua utilidade e eficácia',
        resumo: 'A água termal, que lista apenas \'água\' como ingrediente, intriga consumidores pelo preço elevado, que pode ultrapassar R$ 100 por frasco de 150 ml. Esse cenário levanta questões sobre sua real utilidade e se os supostos benefícios para a pele são comprovados.',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/06/17/17817310856a330f0d9d9f5_1781731085_3x2_rt.jpg',
        autor: 'Nathalia Durval', tempo: 'agora'
    },
    {
        id: 54, categoria: 'internacional',
        titulo: 'Moscou em alerta: Maior ataque de drones ucranianos em dois anos causa incêndios e caos aéreo',
        resumo: 'A capital russa, Moscou, foi alvo nesta quinta-feira (18) do maior ataque de drones lançado pela Ucrânia nos últimos dois anos. A ofensiva provocou incêndios em diversas áreas da cidade e de suas imediações, além de interromper as operações nos principais aeroportos, resultando em centenas de voos a',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/06/18/17817697256a33a5fd9506b_1781769725_3x2_rt.jpg',
        autor: '', tempo: 'agora'
    },
    {
        id: 55, categoria: 'internacional',
        titulo: 'Times Square: De cartão postal a termômetro do futebol em Manhattan',
        resumo: 'A icônica Times Square, cartão turístico dos EUA em Manhattan, vive uma transformação. O local, já conhecido por seu intenso movimento que dificulta a locomoção, tem se tornado um inesperado termômetro do futebol, cujo fenômeno aprofundado na matéria merece destaque.',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/06/17/17817296726a33098872336_1781729672_3x2_rt.jpg',
        autor: 'Mayara Paixão', tempo: 'agora'
    },
    {
        id: 56, categoria: 'internacional',
        titulo: 'Trump ataca críticos do acordo com Irã com duros adjetivos',
        resumo: 'O presidente dos Estados Unidos, Donald Trump, atacou nesta quinta-feira (18) os críticos do acordo com o Irã. Ele classificou como "invejosos, pessoas más ou estúpidos" aqueles que consideram que o pacto oferece concessões excessivas à República Islâmica.',
        imagem: 'https://images.pexels.com/photos/17609924/pexels-photo-17609924.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: '', tempo: 'agora'
    },
    {
        id: 57, categoria: 'internacional',
        titulo: 'Paz entre EUA e Irã: Analistas apontam desvantagem estratégica para Trump',
        resumo: 'Após a assinatura do acordo de paz entre Estados Unidos e Irã, cujos primeiros detalhes foram divulgados nesta quarta-feira (17), analistas e especialistas em Defesa percebem um revés. Há uma crescente sensação de que o presidente Donald Trump deixou o conflito em uma situação estratégica pior do qu',
        imagem: 'https://images.pexels.com/photos/17609924/pexels-photo-17609924.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Victor Lacombe', tempo: '29 min atrás'
    },
    {
        id: 58, categoria: 'internacional',
        titulo: 'Transição energética global perde fôlego em 2026, alerta Fórum Econômico Mundial',
        resumo: 'Um relatório do Fórum Econômico Mundial revela que o nível de preparo global para a transição energética caiu 0,76% entre 2025 e 2026. Essa é a maior queda em mais de uma década, indicando que os investimentos atuais são insuficientes para avançar rumo a uma matriz energética menos poluente.',
        imagem: 'https://images.pexels.com/photos/17609924/pexels-photo-17609924.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Gabriel Gama', tempo: '1h atrás'
    },
    {
        id: 59, categoria: 'internacional',
        titulo: 'México: Homem preso por aluguel ilegal de credencial da Copa do Mundo 2026',
        resumo: 'Um homem de 24 anos foi detido na Cidade do México, acusado de alugar sua credencial de acesso para a Copa do Mundo de 2026. A prisão ocorreu após denúncia da organização do Mundial, que rastreou anúncios do suspeito em redes sociais, e ele foi capturado ao tentar reativar o passe.',
        imagem: 'https://s2-g1.glbimg.com/cFPrAhnAqpf7CqMxB1KMA6uNtsY=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/f/Z/GnA1RQQze1MGTk8lDv9g/2026-06-11t175746z-1976336438-up1em6b1dw8e7-rtrmadp-3-soccer-worldcup-mex-zaf.jpg',
        autor: 'G1 Mundo', tempo: 'agora'
    },
    {
        id: 60, categoria: 'eventos',
        titulo: 'PF aponta vantagens indevidas a Jaques Wagner por auxílio a negócios de ex-sócio de Vorcaro',
        resumo: 'A Polícia Federal afirma, em relatório enviado ao STF, que Jaques Wagner recebeu diversas vantagens econômicas indevidas. Os benefícios teriam sido concedidos por Augusto Lima, ex-sócio de Daniel Vorcaro, em troca de ajuda aos negócios do empresário.',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/06/18/17817775096a33c4658ef1a_1781777509_3x2_rt.jpg',
        autor: 'Mônica Bergamo', tempo: 'agora'
    },
    {
        id: 61, categoria: 'eventos',
        titulo: 'C6 no Rock celebra Cazuza com Arnaldo Antunes, Frejat, Maria Gadú e elenco de peso',
        resumo: 'O festival C6 no Rock, que ocorre em 22 e 23 de agosto no Parque Ibirapuera, São Paulo, apresentará um tributo exclusivo a Cazuza. Batizado de "Todo Amor que Houver Nessa Vida", o espetáculo reunirá grandes nomes como Arnaldo Antunes, Frejat, Maria Gadú, Lobão, Léo Jaime, Leoni e Johnny Hooker para',
        imagem: 'https://images.pexels.com/photos/30354454/pexels-photo-30354454.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Mônica Bergamo, Jullia Gouveia', tempo: 'agora'
    },
    {
        id: 62, categoria: 'eventos',
        titulo: 'Elon Musk se torna 1º trilionário do mundo impulsionado por IPO recorde da SpaceX',
        resumo: 'Elon Musk alcançou um patrimônio líquido de US$ 1,2 trilhão na última sexta-feira (12), tornando-se o primeiro trilionário da história mundial. O feito, que surge 110 anos após o primeiro bilionário, foi impulsionado pelo IPO recorde da SpaceX, sua empresa de foguetes e inteligência artificial.',
        imagem: 'https://images.pexels.com/photos/30354454/pexels-photo-30354454.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Gabriela Mayer, Gustavo Simon, Magê Flores, Gustavo Luiz, Laura Lewer, Jéssica Cruz, Raphael Concli', tempo: '1h atrás'
    },
    {
        id: 63, categoria: 'politica',
        titulo: 'Emirados Árabes Proíbem Redes Sociais para Menores de 15 Anos, Pioneiros no Mundo Árabe',
        resumo: 'Os Emirados Árabes Unidos estabeleceram uma idade mínima de 15 anos para o uso de redes sociais, tornando-se o primeiro país árabe a introduzir tal restrição. A medida reflete a crescente preocupação global com o impacto das plataformas online na infância e juventude.',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/06/18/17817860126a33e59c55452_1781786012_3x2_rt.jpg',
        autor: 'Jana Choukeir', tempo: 'agora'
    },
    {
        id: 64, categoria: 'politica',
        titulo: 'Quem é Jaques Wagner: Aliado de Lula, líder no Senado e alvo de operação policial',
        resumo: 'Jaques Wagner, 75, é o líder do governo Lula (PT) no Senado e um dos mais próximos aliados do presidente, além de pré-candidato à reeleição. Em 2018, foi cotado como possível candidato ao Palácio do Planalto, mas desistiu após uma operação policial em seu apartamento.',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/06/18/17817844146a33df5e4f978_1781784414_3x2_rt.jpg',
        autor: '', tempo: 'agora'
    },
    {
        id: 65, categoria: 'politica',
        titulo: 'PF investiga Jaques Wagner por repasses do Banco Master e apartamento de R$ 2,5 milhões',
        resumo: 'A Polícia Federal (PF) apura suspeitas de que o senador Jaques Wagner (PT-BA), líder do governo Lula no Senado, teria recebido pagamentos ligados ao Banco Master. A investigação inclui um apartamento em Salvador avaliado em R$ 2,5 milhões e repasses através da empresa da esposa de seu enteado.',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/06/18/17817813076a33d33b62f42_1781781307_3x2_rt.jpg',
        autor: 'José Marques', tempo: 'agora'
    },
    {
        id: 66, categoria: 'politica',
        titulo: 'Presidente do PT defende Jaques Wagner e confia em inocência após ação da PF',
        resumo: 'O presidente nacional do PT, Edinho Silva, defendeu nesta quinta-feira o senador Jaques Wagner (PT-BA), líder do governo no Senado. Wagner é alvo de uma operação da Polícia Federal no âmbito do Caso Master, e Silva declarou ter confiança de que o senador comprovará sua inocência.',
        imagem: 'https://f.i.uol.com.br/fotografia/2025/12/09/176530203669385f1431028_1765302036_3x2_rt.jpg',
        autor: 'Caio Spechoto, Fernanda Brigatti, Catia Seabra', tempo: 'agora'
    },
    {
        id: 67, categoria: 'politica',
        titulo: 'Lula preparado para impactos do Banco Master no governo e já ensaiou resposta',
        resumo: 'O presidente Lula já estava preparado para a possibilidade de o escândalo do Banco Master atingir membros de seu governo, com foco na Bahia. Ele já teria ensaiado uma resposta para o caso de as investigações avançarem sobre autoridades ligadas a ele.',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/06/18/17817775096a33c4658ef1a_1781777509_3x2_rt.jpg',
        autor: 'Mônica Bergamo', tempo: 'agora'
    },
    {
        id: 68, categoria: 'brasil',
        titulo: 'Neurodiversidade: A busca por uma sociedade mais justa para autistas e TDAH',
        resumo: 'A neurodiversidade é um conceito que, embora possa soar incomum, carrega a expectativa de construir uma sociedade mais equitativa. Seu principal objetivo é promover justiça social para pessoas autistas e indivíduos com condições como TDAH, dislexia e outras questões de processamento e função executi',
        imagem: 'https://f.i.uol.com.br/fotografia/2025/09/18/175821064268cc2a52d832e_1758210642_3x2_lg.jpg',
        autor: '', tempo: 'agora'
    },
    {
        id: 69, categoria: 'politica',
        titulo: 'Caso Henry Borel: Padrasto condenado a 43 anos; mãe, após pena branda, vai para casa',
        resumo: 'O julgamento do caso Henry Borel, criança de 4 anos torturada e morta em 2021, foi concluído no Rio. O padrasto Jairo Souza Santos recebeu 43 anos de prisão. A mãe, Monique Medeiros, com pena de 1 ano e 4 meses por omissão, foi liberada pela juíza.',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/03/23/177429010869c184bc742b4_1774290108_3x2_rt.jpg',
        autor: '', tempo: 'agora'
    },
    {
        id: 70, categoria: 'brasil',
        titulo: 'Abandono e falta de registros ameaçam o legado das brizoletas no Rio Grande do Sul',
        resumo: 'Entre 1959 e 1963, Leonel Brizola construiu as brizoletas para expandir o acesso à educação em áreas remotas do Rio Grande do Sul. Símbolo da alfabetização gaúcha, elas hoje enfrentam abandono e falta de registros, ameaçando seu legado.',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/05/27/17799105326a174784b3ff0_1779910532_3x2_rt.jpg',
        autor: 'Carlos Villela', tempo: 'agora'
    },
    {
        id: 71, categoria: 'brasil',
        titulo: 'Proibição de redes sociais para menores no Reino Unido: proteção ou maior vulnerabilidade?',
        resumo: 'Seguindo a Austrália, o Reino Unido proibiu o acesso de menores de 16 anos a redes sociais. Embora a ação seja politicamente atrativa, críticos argumentam que ela pode, na verdade, expor as crianças a maiores riscos, contrariando o objetivo de proteção.',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/04/28/177740821869f118dabd47f_1777408218_3x2_rt.jpg',
        autor: '', tempo: 'agora'
    },
    {
        id: 72, categoria: 'brasil',
        titulo: 'Maria Bethânia celebra 80 anos: Ícone da cultura brasileira é homenageada',
        resumo: 'A cantora Maria Bethânia completa 80 anos nesta quinta-feira (18), marcando uma trajetória de grande impacto na cultura brasileira. Em celebração, o poeta José Carlos Capinan relembra a convivência com a artista desde os anos 1960 em Salvador, antes de sua projeção nacional com o show "Opinião". Sua',
        imagem: 'https://images.pexels.com/photos/14357175/pexels-photo-14357175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'José Carlos Capinan', tempo: 'agora'
    },
    {
        id: 73, categoria: 'cidade',
        titulo: 'São Paulo: Faculdade BP da Beneficência Portuguesa abre inscrições para 1º Vestibular de Medicina',
        resumo: 'A Faculdade BP, instituição ligada ao renomado Hospital Beneficência Portuguesa de São Paulo, deu início às inscrições para seu primeiro vestibular. O processo seletivo visa formar a turma pioneira do curso de Medicina, com ingresso programado para o ano letivo de 2027.',
        imagem: 'https://images.pexels.com/photos/12497049/pexels-photo-12497049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Lucas Leite', tempo: 'agora'
    },
    {
        id: 74, categoria: 'brasil',
        titulo: 'Brasil bate recorde em dívida de precatórios, superando R$ 330 bilhões apesar de pagamentos recordes',
        resumo: 'O Brasil registrou um recorde histórico na dívida de precatórios, atingindo R$ 330,4 bilhões, o maior estoque já registrado. Surpreendentemente, este valor foi alcançado mesmo após o país ter pago R$ 113,4 bilhões, volume recorde. O Mapa Anual dos Precatórios 2025, do CNJ, evidencia a crescente e co',
        imagem: 'https://images.pexels.com/photos/14357175/pexels-photo-14357175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: '', tempo: 'agora'
    },
    {
        id: 75, categoria: 'brasil',
        titulo: 'Sinovac, da Coronavac, anuncia plano de US$ 100 milhões para biotecnologia no Brasil',
        resumo: 'A Sinovac, empresa chinesa por trás da Coronavac, planeja investir US$ 100 milhões (cerca de R$ 520 milhões) no Brasil nos próximos cinco anos. O objetivo é estabelecer uma operação local para a produção de vacinas e expandir atividades na área de biotecnologia, conforme revelado por Dimas Covas, ci',
        imagem: 'https://images.pexels.com/photos/14357175/pexels-photo-14357175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Flavia Lima', tempo: 'agora'
    },
    {
        id: 76, categoria: 'brasil',
        titulo: 'Tarô: Reflexão Milenar para o Amor e as Incertezas da Vida Afetiva',
        resumo: 'O tarô, uma prática milenar, tem se destacado como um recurso para indivíduos que buscam clareza em suas relações. Em meio às incertezas da vida afetiva, ele é cada vez mais procurado como uma ferramenta de reflexão profunda.',
        imagem: 'https://images.pexels.com/photos/14357175/pexels-photo-14357175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: '', tempo: 'agora'
    },
    {
        id: 77, categoria: 'cidade',
        titulo: 'Falha em equipamento na região da Luz causa lentidão na Linha 4-Amarela do Metrô de SP',
        resumo: 'A Linha 4-Amarela do Metrô de São Paulo enfrenta lentidão na manhã desta quinta-feira (18) devido a um problema em equipamento de via. A falha, localizada na região da estação da Luz, afeta o serviço operado pela concessionária Motiva.',
        imagem: 'https://images.pexels.com/photos/12497049/pexels-photo-12497049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: '', tempo: '21 min atrás'
    },
    {
        id: 78, categoria: 'brasil',
        titulo: 'Cérebro Bilíngue: Novo estudo revela processamento de idiomas mais unificado',
        resumo: 'Neurocientistas há muito tempo teorizavam que bilíngues processavam idiomas com padrões cerebrais distintos. Contudo, uma nova pesquisa sugere que esses padrões são, na verdade, muito mais semelhantes do que se imaginava inicialmente.',
        imagem: 'https://images.pexels.com/photos/14357175/pexels-photo-14357175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'K. R. Callaway', tempo: '29 min atrás'
    },
    {
        id: 79, categoria: 'cidade',
        titulo: 'Zona Norte de SP: Comunidade de Morro Grande luta há 20 anos por área verde e memória',
        resumo: 'Na Zona Norte de São Paulo, uma área de mais de 600 mil metros quadrados entre Brasilândia, Freguesia do Ó e Pirituba representa um dos últimos grandes remanescentes verdes da região. Há duas décadas, a comunidade local batalha pela preservação desse espaço vital, defendendo sua memória e natureza.',
        imagem: 'https://images.pexels.com/photos/12497049/pexels-photo-12497049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Fernanda de Souza', tempo: '29 min atrás'
    },
    {
        id: 80, categoria: 'politica',
        titulo: 'Líder de Lula no Senado, Jaques Wagner entra na mira em investigação do Banco Master',
        resumo: 'O senador Jaques Wagner, líder do governo Lula no Senado, tornou-se alvo de investigações. Ele está sendo apurado por sua relação com um ex-sócio do Banco Master, em desdobramento do chamado caso Master.',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/06/55166000537_545486e91c_o.jpg?w=200',
        autor: 'lucasmassei', tempo: 'agora'
    },
    {
        id: 81, categoria: 'politica',
        titulo: 'Operação Compliance Zero: Jaques Wagner, líder do governo, e ex-sócio de Vorcaro sob investigação',
        resumo: 'A nova fase da Operação Compliance Zero, deflagrada nesta quinta-feira (18), investiga a relação do senador Jaques Wagner, líder do governo no Senado, com Augusto Lima, ex-sócio de Daniel Vorcaro. Foram cumpridos 18 mandados de busca e apreensão pelo STF na Bahia, São Paulo e Distrito Federal. Os in',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/06/55323444552_f604960ca7_o.jpg?w=200',
        autor: 'renatasouza', tempo: 'agora'
    },
    {
        id: 82, categoria: 'brasil',
        titulo: 'Durigan defende Jaques Wagner após PF deflagrar 9ª fase da Operação Compliance Zero',
        resumo: 'O ministro da Fazenda, Dario Durigan, defendeu o senador Jaques Wagner (PT-BA) após o líder do governo no Senado se tornar alvo da 9ª fase da Operação Compliance Zero da Polícia Federal. Durigan expressou confiança no petista e garantiu que ele terá a chance de apresentar sua versão dos aconteciment',
        imagem: 'https://cdn.oantagonista.com/uploads/2026/06/dario-durigan-1.jpg',
        autor: 'Wal Lima', tempo: 'agora'
    },
    {
        id: 83, categoria: 'cidade',
        titulo: 'Lucas Moura surpreende na recuperação e retira bota uma semana antes no São Paulo',
        resumo: 'O meia-atacante Lucas Moura, do São Paulo, demonstra uma evolução notável em sua recuperação pós-cirurgia, tendo retirado a bota ortopédica uma semana antes do previsto. A equipe Tricolor Paulista está animada com o progresso do camisa 7, mas mantém cautela quanto à data de seu retorno aos gramados.',
        imagem: 'https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2026/06/17/196995548-55242950640b3eef1f19fkeasy-resizecom-610x400.jpg',
        autor: 'Jogada10', tempo: '20h atrás'
    },
    {
        id: 84, categoria: 'cidade',
        titulo: 'Funcionárias da Latam agredidas em Guarulhos; agressora foge do aeroporto',
        resumo: 'Funcionárias da Latam foram agredidas por uma mulher na área de check-in do Aeroporto de Guarulhos. O ataque ocorreu na noite desta terça-feira (16 de junho), e a agressora conseguiu fugir do local após o incidente.',
        imagem: 'https://i.metroimg.com/tebUcr3MRScQcM_h8qFdhPEndlHq2_mHnkdB2Bl6SBA/rs:fill:1200:800:1/g:no/q:85/f:webp/plain/https://images.metroimg.com/2026/06/captura-de-tela-93-1.png',
        autor: 'Metrópoles', tempo: '20h atrás'
    },
    {
        id: 85, categoria: 'economia',
        titulo: 'PF investiga Jaques Wagner por atuação pró-Banco Master e apartamento de R$ 2,4 mi',
        resumo: 'Líder do governo, Jaques Wagner (PT-BA) foi alvo de mandados da PF na 9ª fase da Operação Compliance Zero. A investigação aponta indícios de atuação pró-Banco Master em temas de crédito consignado e FGC, em suposta contrapartida à aquisição de um apartamento de R$ 2,4 milhões.',
        imagem: 'https://s2-g1.glbimg.com/SNEnPQA8-Dcnkq27mXs00Q6JRug=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/L/w/kP2klISEWasblHiR4z3A/55268276416-6576e4b70b-o.jpg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 86, categoria: 'economia',
        titulo: 'Aquarismo em Alta: Peixes Conquistam Lares no Interior de SP e Impulsionam Mercado',
        resumo: 'No interior de São Paulo, peixes de aquário ganham popularidade como animais de estimação, dinamizando o mercado de aquarismo. A prática é reconhecida por seus benefícios à saúde mental, como redução de estresse, mas especialistas alertam para a necessidade de cuidados rigorosos com a qualidade da á',
        imagem: 'https://s2-g1.glbimg.com/lfSA4nk9D9UCraPdPHCkeXzUtB8=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/D/s/zrYIVEQQKbwltznGTHxw/formato-padrao-imagens-g1-2026-06-15t162658.938.png',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 87, categoria: 'economia',
        titulo: 'Dólar sobe 0,65% a R$ 5,14: juros e acordo EUA-Irã agitam mercados',
        resumo: 'O dólar abriu esta quinta-feira (18) em alta de 0,65%, cotado a R$ 5,1406, impulsionado pelas decisões de juros do Copom e do Federal Reserve. O novo acordo entre Estados Unidos e Irã também contribuiu para a volatilidade, com impacto no preço do petróleo.',
        imagem: 'https://s2-g1.glbimg.com/wfZ5moSYkzWL4s990ULEHysEouU=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/1/P/tCWnbnTHuFIxLcWlmcGA/globo-canal-5-20241101-1800-frame-310355.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 88, categoria: 'internacional',
        titulo: 'São João de Petrolina: Tenda do Forró abre na Orla com forró e gastronomia junina',
        resumo: 'A Orla de Petrolina, no Sertão de Pernambuco, inaugura nesta sexta-feira (19) a Tenda do Forró, um novo espaço para celebrar o autêntico São João. O local oferecerá apresentações de trios pé de serra, comidas típicas e artesanato regional, funcionando como um \'esquenta\' para os grandes shows do Páti',
        imagem: 'https://s2-g1.glbimg.com/nJi27GVQQ1XIdnuMfp4Eo_xmogc=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/W/q/iWryd5Q8a6NVn64585XQ/monumento-eu-amo-petrolina.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 89, categoria: 'internacional',
        titulo: 'Acordo EUA-Irã reabre Estreito de Ormuz para superpetroleiros; Líbano em alerta',
        resumo: 'Superpetroleiros voltaram a circular pelo Estreito de Ormuz após o acordo de paz assinado entre EUA e Irã na quarta (17). O pacto encerra ataques e inicia 60 dias de negociações sobre o programa nuclear iraniano. Ações de Israel no Líbano, contudo, ameaçam a estabilidade da região.',
        imagem: 'https://s2-g1.glbimg.com/VvIZSA4jc0Z1ME34g4V4_jsF1CU=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/Q/K/IxGX2BSrGvePTZ6cAdfQ/2026-06-17t161216z-1947210395-rc2svla73zfz-rtrmadp-3-g7-summit-trump.jpg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 90, categoria: 'eventos',
        titulo: 'Pernambuco em Foco: Reveja a edição do Bom Dia PE de 18 de junho de 2026',
        resumo: 'O GMAX NOTÍCIAS disponibiliza a íntegra do telejornal Bom Dia PE, transmitido em 18 de junho de 2026. Assista aos vídeos da edição para acompanhar as notícias e os principais acontecimentos de Pernambuco.',
        imagem: 'https://s2-g1.glbimg.com/kGmiC2F4-6uA3_-k1iw16m8h5XM=/s01.video.glbimg.com/deo/vi/91/07/14710791',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 91, categoria: 'eventos',
        titulo: 'Detento em semiaberto foge de presídio na Bahia durante reparo elétrico',
        resumo: 'Um detento em regime semiaberto, Edson Mascarenhas Primo, fugiu do Conjunto Penal de Feira de Santana (BA) na noite de quarta-feira (17). Ele escapou enquanto realizava um reparo autorizado na rede elétrica de um pavilhão. As forças de segurança buscam o foragido, que cumpria pena por roubo.',
        imagem: 'https://s2-g1.glbimg.com/FJbojo0Zhg0FRaSsB94m8atGYTw=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/p/X/cgnc5yQ7WMQYzPgWqczA/foto-no-tamanho-home-60-.png',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 92, categoria: 'cidade',
        titulo: 'Ventos de 80 km/h: Microburst causa destruição e prejuízos em Piracuruca, Piauí',
        resumo: 'Um microburst atingiu Piracuruca, Piauí, na tarde de quarta-feira (17), com ventos de mais de 80 km/h. O fenômeno derrubou árvores, postes e causou danos generalizados, atingindo veículos e estruturas. A Defesa Civil aguarda o levantamento final dos prejuízos na cidade.',
        imagem: 'https://s2-g1.glbimg.com/maqz7oHwOAfO_He4MYBLoo0DXlw=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/J/Y/1TZzLTQEiQCzZXOPRKKA/edicao-imagens-g1-18-.jpg.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 93, categoria: 'brasil',
        titulo: 'Brasil x Haiti: Copa do Mundo tem duelo de opostos e possível surpresa na sexta',
        resumo: 'A seleção brasileira enfrenta o Haiti nesta sexta-feira (19), na Filadélfia, em um confronto pela Copa do Mundo que coloca frente a frente um dos favoritos ao título e a equipe de pior ranking na Fifa. Apesar da 85ª colocação, os haitianos mostraram bom desempenho na estreia, com organização defensi',
        imagem: 'https://s2-g1.glbimg.com/RA9SlIgKU0uqNE6p9XcuIUlVvuc=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/k/l/ima2kiT2yceCEhO8ZAhA/globo-canal-5-20260618-0800-frame-78758.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 94, categoria: 'cidade',
        titulo: 'Motorista foge após atropelar e matar pedestre na Castello Branco em Boituva',
        resumo: 'Um pedestre morreu atropelado na manhã desta quinta-feira (18) no quilômetro 111 da Rodovia Castello Branco (SP-280), em Boituva (SP). O motorista do veículo que causou o acidente fugiu do local sem prestar socorro à vítima, que não foi identificada. A Polícia Civil de Boituva investiga o caso.',
        imagem: 'https://s2-g1.glbimg.com/hRCpTFGJD12f8D3szz5A7_wVHq4=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/1/X/kbxp3ySbO8yG7lSwUzBQ/e11598b7-64ef-4dec-830e-88cd059554ce-1-.jpg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 95, categoria: 'brasil',
        titulo: 'Polícia desmantela quadrilha de MG em Cabo Frio; golpes de cartão somam R$ 50 mil',
        resumo: 'Seis indivíduos de Minas Gerais foram presos em Cabo Frio, RJ, suspeitos de integrar uma quadrilha especializada em golpes com cartões de crédito. O grupo, que se passava por entregadores, causou prejuízos superiores a R$ 50 mil na região. Um veículo clonado e outros itens foram apreendidos na opera',
        imagem: 'https://s2-g1.glbimg.com/IizkP-TCr_fIWZkrm9K74PxoPlE=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/B/w/jwpQ1bQSivA9djVFgkZA/whatsapp-image-2026-06-18-at-08.14.18.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 96, categoria: 'cidade',
        titulo: 'Espetáculo Celeste: Lua e Planetas Brilham em Raro Encontro Visível no Brasil',
        resumo: 'Uma rara conjunção entre a Lua crescente e Vênus, acompanhada por Mercúrio e Júpiter, encantou moradores de Montes Claros na noite de quinta-feira (17). O fenômeno, que pode ser observado a olho nu em todo o país novamente nesta quinta (18), é mais incomum do que alinhamentos planetários isolados.',
        imagem: 'https://s2-g1.glbimg.com/yZBBIfgq45JcyC3-HFkC6T97JE0=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/G/Z/PHgUypSXyRWNBbDpaMqg/lua1.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 97, categoria: 'cidade',
        titulo: 'Gás de 13 kg encarece até 3,36% em Manaus; Procon registra queda no modelo de 8 kg',
        resumo: 'O Procon Manaus divulgou que o preço do gás de cozinha de 13 kg subiu até 3,36% em junho, comparado a maio. Em contrapartida, o modelo de 8 kg teve uma redução de 1,25% na capital amazonense. A pesquisa, realizada em 36 estabelecimentos, aponta ainda alta de 4,05% para o botijão de 7 kg da Amazongás',
        imagem: 'https://s2-g1.glbimg.com/DvzIxsglJiqlUeLICl5USllv9NU=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/8/d/twJcpPRjSo86fVtQ0XDg/whatsapp-image-2026-04-16-at-15.17.52-1.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 98, categoria: 'politica',
        titulo: 'PF investiga Jaques Wagner por apartamento e R$ 3,5 mi em nova fase da Compliance Zero',
        resumo: 'O senador Jaques Wagner (PT-BA) é alvo da 9ª fase da Operação Compliance Zero, deflagrada nesta quinta-feira (18), por suspeita de receber vantagens indevidas, como um apartamento e R$ 3,5 milhões. A investigação da Polícia Federal, autorizada pelo STF, apura um esquema bilionário de fraudes e corru',
        imagem: 'https://s2-g1.glbimg.com/6Z5PhY5aZsmfi7PG_8yrtYhBT18=/3870x0/filters:format(jpeg)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/U/4/b6UFzzQoCj2GglB2uSpw/carlos-moura-wagner.jpg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 99, categoria: 'politica',
        titulo: 'Parlamentares investigados por interferir em demolição de resort do traficante Peixão',
        resumo: 'Relatório da Seop aponta que Val Ceasa (deputado) e Ulisses Marins (ex-vereador) tentaram barrar demolição de imóveis do traficante Peixão (TCP). A operação foi adiada por pressões e vazamentos, e são alvo de busca e apreensão.',
        imagem: 'https://s2-g1.glbimg.com/AIfb4Lu2wq0rTNwkc_pbM2n_uMU=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/c/c/ODkbZmRIG6ekUrTaFR4A/ezgif.com-animated-gif-maker-35-.gif',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 100, categoria: 'brasil',
        titulo: 'Suspeito de ligação com facção criminosa morre em confronto com a PM em Várzea Grande',
        resumo: 'Um homem de 41 anos morreu após confronto com a Polícia Militar na quarta-feira (17), em Várzea Grande (MT), região metropolitana de Cuiabá. Segundo a PM, o suspeito atirou contra os agentes durante uma tentativa de abordagem em área conhecida por atuação de facções e tráfico de drogas. A ocorrência',
        imagem: 'https://s2-g1.glbimg.com/vhRmRUuuTE45oO3KMkOSkd1_ttE=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/c/d/FKpUOTRiGNiXuP9qmgWw/foto-g1-58-.jpg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 101, categoria: 'politica',
        titulo: 'Caraguatatuba decreta corte de gastos até 2026 após queda de royalties e ICMS',
        resumo: 'A Prefeitura de Caraguatatuba decretou medidas de contingenciamento de despesas em resposta a uma queda significativa na arrecadação municipal. O decreto, válido até dezembro de 2026, visa mitigar uma frustração de R$ 44,6 milhões em royalties de petróleo e ICMS no primeiro quadrimestre, com projeçã',
        imagem: 'https://s2-g1.glbimg.com/leYCxn93wJXn9cgRz1r4TtThz3A=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/U/t/oQ3fHnTPiHhfCPApy6AA/prefeitura-de-caraguatatuba.jpg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 102, categoria: 'politica',
        titulo: 'MP-BA exige revisão de contratos de R$ 1,2 milhão para shows de São João em cidade baiana',
        resumo: 'O Ministério Público da Bahia (MP-BA) recomendou à Prefeitura de Conceição do Jacuípe a revisão de contratos artísticos para o São João de 2026. O órgão questiona os valores de R$ 500 mil para Rey Vaqueiro e R$ 784 mil para Maiara & Maraisa, alegando incompatibilidade com o mercado e limites estabel',
        imagem: 'https://s2-g1.glbimg.com/r2frpW3X0apJlHKfN4XWAPg27ME=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/E/J/4RiUZjRcuTJPfyNo6gHQ/dsc-1167.jpg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 103, categoria: 'politica',
        titulo: 'Compliance Zero mira Jaques Wagner e Banco Master por corrupção e lavagem',
        resumo: 'A Polícia Federal deflagrou nesta quinta a 9ª fase da Operação Compliance Zero, com mandados de busca em três estados. O senador Jaques Wagner (PT-BA), líder do governo Lula, é o principal alvo, suspeito de receber vantagens indevidas do Banco Master em troca de atuação parlamentar, em investigação',
        imagem: 'https://s2-g1.glbimg.com/hkYV9s-lqC2CxEiNWqkvNSLFTUk=/2506x0/filters:format(jpeg)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/L/w/kP2klISEWasblHiR4z3A/55268276416-6576e4b70b-o.jpg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 104, categoria: 'cidade',
        titulo: 'Alinhamento de Lua e Três Planetas Surpreende Moradores do Litoral e Interior de SP',
        resumo: 'Moradores da Baixada Santista e Vale do Ribeira, em São Paulo, presenciaram um raro alinhamento astronômico na última quarta-feira (17). A Lua, Mercúrio, Vênus e Júpiter foram visíveis a olho nu, encantando o público. Especialistas destacaram a singularidade do fenômeno, registrado em diversas cidad',
        imagem: 'https://s2-g1.glbimg.com/ZAVZdW0xdhAdlnmGzapTIsXmBrE=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/7/N/eQ27rhRu219Bw6xOFHJw/fotos-materias-2026-06-18t083705.737.jpg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 105, categoria: 'cidade',
        titulo: 'Acidente com capotamento e três veículos causa lentidão na Cremação, em Belém',
        resumo: 'Um carro capotou em acidente com outros dois veículos na Cremação, em Belém, nesta quinta-feira (18), causando lentidão no trânsito. Apesar de não haver feridos, as causas da colisão e a ausência de agentes no local seguem sem resposta.',
        imagem: 'https://s2-g1.glbimg.com/qtwqPZyy69NaKrFA2igTSQvIEak=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/q/c/FuxqsdTCaNMUDSDQlB4Q/whatsapp-image-2026-06-18-at-08.22.18.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 106, categoria: 'cidade',
        titulo: 'Cientistas Desvendam o Mistério dos Gases: Adulto Saudável Libera 32 Puns por Dia',
        resumo: 'Pesquisadores da Universidade de Maryland desenvolveram um sensor inovador para monitorar com precisão a flatulência. O estudo revelou que adultos saudáveis liberam em média 32 gases por dia, um número bem acima das estimativas anteriores. A pesquisa oferece novos insights sobre a saúde intestinal e',
        imagem: 'https://s2-g1.glbimg.com/g-W4aGqnEsud3lmzdYXWlV9LHYE=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/g/v/D3ESBaSjCBoundBN0vPw/adobestock-119968709.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 107, categoria: 'cidade',
        titulo: 'Concerto gratuito de forró da Banda da PMPI celebra 191 anos da corporação em Teresina',
        resumo: 'A Banda Musical da Polícia Militar do Piauí (PMPI) realiza nesta quinta-feira (18) um concerto gratuito de forró e baião em Teresina. O evento, que começa às 19h, celebra os 191 anos da corporação e os 151 anos do grupo, reconhecido como Patrimônio Cultural Imaterial do Estado. O repertório inclui c',
        imagem: 'https://s2-g1.glbimg.com/tx1y59ovvJphNy4QTOUFUim_v9w=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/B/T/5sAETGQl6CL0AISgojUw/montagem-g1-banda-pmpi.jpg.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 108, categoria: 'cidade',
        titulo: 'RS: Quarto Dia de Frio Intenso com Mínimas Negativas e Geada; Chuva a Caminho',
        resumo: 'O Rio Grande do Sul registrou seu quarto dia consecutivo de temperaturas negativas e geada nesta quinta-feira (18), com mínimas de -1,4°C em Getúlio Vargas e -1,0°C em Vacaria. A semana foi marcada por frio intenso, com Porto Alegre tendo o amanhecer mais frio de 2026 na terça (16). A previsão, cont',
        imagem: 'https://s2-g1.glbimg.com/wDwuDaM6U-5icTh4WAyGNsuO-AQ=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/v/o/sEg9CzTti32FXw4V8V4g/g1-33-.jpg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 109, categoria: 'politica',
        titulo: 'TCU alerta: Engorda de Ponta Negra pode falhar antes do previsto',
        resumo: 'O Tribunal de Contas da União (TCU) apontou risco de comprometimento da engorda da Praia de Ponta Negra, Natal, antes da vida útil de sete anos. O ministro Antonio Anastasia determinou que Prefeitura, MIDR e empresas ligadas à obra esclareçam sete irregularidades identificadas em auditoria.',
        imagem: 'https://s2-g1.glbimg.com/idw5uZ4otKE1bWmsqTr2dkVJJ-A=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/9/A/9x1ofiTiAfwnSmwQtVDg/whatsapp-image-2026-06-17-at-16.03.09.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 110, categoria: 'cidade',
        titulo: 'Observatório gaúcho registra raro alinhamento de Vênus, Lua, Júpiter e Mercúrio',
        resumo: 'O céu do Rio Grande do Sul foi palco de um raro fenômeno astronômico na noite de quarta-feira (17). O Observatório Heller & Jung, em Taquara, registrou o alinhamento de Lua, Vênus, Júpiter e Mercúrio. O evento, que incluiu a ocultação de Vênus pela Lua, é considerado de grande raridade.',
        imagem: 'https://s2-g1.glbimg.com/y_rrOkEJ6agW3_0_KHHgwWYCoV8=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/F/p/9hSqVxQBSAKEoaaBoFVw/g1-2026-06-18t083231.979.jpg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 111, categoria: 'brasil',
        titulo: 'Empresário executado em Arapiraca; suspeito de autoria morre baleado por policial à paisana',
        resumo: 'O empresário Marcos Aparecido Ribeiro, 46, foi assassinado a tiros em Arapiraca (AL) na quarta-feira (17). Um dos suspeitos, Fábio Pereira Lima da Silva, 47, também morreu após ser baleado por um policial à paisana no local. A Polícia Civil investiga o caso, enquanto o condutor da motocicleta com o',
        imagem: 'https://s2-g1.glbimg.com/HTLoL3KamIIrgKrHAG7P18Qgn40=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/X/B/S55gwgR3uw2jfPsGYVkQ/suspeito-de-participar-de-morte-de-empresario-foi-atingido-por-policial-a-paisana-e-morreu-no-local.jpg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 112, categoria: 'brasil',
        titulo: 'Adriana Villela: Relator no STJ decide manter anulação de condenação por triplo homicídio',
        resumo: 'O STJ iniciou o julgamento de recursos contra a anulação da condenação de Adriana Villela, acusada pelo triplo homicídio do \'Crime da 113 Sul\'. O relator, ministro Sebastião Reis Júnior, votou para manter a anulação, citando cerceamento de defesa por acesso tardio a provas. A sessão virtual aguarda',
        imagem: 'https://s2-g1.glbimg.com/tmWulPfiFq0ZgXNIi4yxnmNw9Ow=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/V/t/07uB5oT1axK7pPLlY4pw/crd-caso-villela-adriana-todos-frame-168739.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 113, categoria: 'internacional',
        titulo: 'Ataque de drone ucraniano provoca explosão em refinaria de Moscou',
        resumo: 'Moscou sofreu ataque de drones ucranianos nesta quinta-feira (18), resultando na explosão de refinaria de petróleo e no lançamento de seu teto. É o segundo ataque ao complexo esta semana, com danos a edifícios e impacto no tráfego aéreo da capital.',
        imagem: 'https://s2-g1.glbimg.com/PEZyUoQh1jis-QL75pRWyS4GrPk=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/P/h/feej7KQM6XpI6MCvXSbg/2026-06-18t094304z-1-lwd020618062026rp1-rtrwnev-c-0206-ukraine-crisis-attack-moscow-ugc32-ezgif.com-crop.gif',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 114, categoria: 'brasil',
        titulo: 'Lateral Douglas Santos ressurge na Seleção após 10 anos e vira peça chave de Ancelotti',
        resumo: 'O lateral-esquerdo Douglas Santos, de 32 anos, celebra a consolidação como titular na Seleção Brasileira, após quase uma década de ausência. A oportunidade concedida pelo técnico Carlo Ancelotti impulsionou sua visibilidade e reconhecimento junto à torcida.',
        imagem: 'https://s2-g1.glbimg.com/Mz3WMA6VHtyOFwacd_FbAjgO_jY=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/S/N/c1YU0QTN2DE3201cXWRA/globo-canal-4-20260616-2000-frame-103579.jpeg',
        autor: 'Jornal Nacional', tempo: '1d atrás'
    },
    {
        id: 115, categoria: 'cidade',
        titulo: 'Mega incêndio atinge mais de 50 barracos em Paraisópolis, Zona Sul de SP',
        resumo: 'Um incêndio de grandes proporções atingiu a comunidade de Paraisópolis, na Zona Sul de São Paulo. Mais de 50 barracos foram afetados pelo fogo, causando devastação na região.',
        imagem: 'https://images.pexels.com/photos/12497049/pexels-photo-12497049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: 'agora'
    },
    {
        id: 116, categoria: 'internacional',
        titulo: 'Acordo inicial de paz entre EUA e Irã é assinado; negociações nucleares seguem por 60 dias',
        resumo: 'EUA e Irã assinaram um acordo inicial de paz em Versalhes, que suspende sanções americanas e garante que Teerã não terá armas nucleares. O pacto abre um período de 60 dias para negociações sobre a questão nuclear, buscando um acordo definitivo.',
        imagem: 'https://s2-g1.glbimg.com/nEhAXQPmmTxnFaXuCUQn4QSQvRg=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/M/e/iPi5AcSi6UmNq8pIhWzA/2026-06-18t085259z-56023202-rc28wlav3tle-rtrmadp-3-iran-crisis-pezeshkian-signing-still.jpg',
        autor: 'G1 Mundo', tempo: '6h atrás'
    },
    {
        id: 117, categoria: 'economia',
        titulo: 'Atlas projeta retorno do Brasil à disputa por capital após 2027 com novas regras',
        resumo: 'A empresa Atlas avalia que o Brasil demonstra melhoria regulatória, mas mantém cautela em relação a novos investimentos no curto prazo. Contudo, a companhia indica que regras para baterias, acordos sobre cortes de geração e definições da Aneel podem reposicionar o país na busca por capital a partir',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/03/Solar_NeoenergiaDivulgacao-Neoenergia.jpg?w=1200&h=630&crop=1',
        autor: 'robsonrodrigues', tempo: 'agora'
    },
    {
        id: 118, categoria: 'eventos',
        titulo: 'Viviane Araújo, 51, confronta etarismo e reitera legado no Salgueiro',
        resumo: 'Aos 51 anos, Viviane Araújo, rainha de bateria da Acadêmicos do Salgueiro, abordou os comentários etaristas que enfrenta no Carnaval. Com 18 anos de reinado ininterrupto na escola, a atriz reforça sua paixão e legado na folia carioca, demonstrando força e resiliência.',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/05/viviane-araujo-2.jpg?w=200',
        autor: 'carolineferreira', tempo: 'agora'
    },
    {
        id: 119, categoria: 'internacional',
        titulo: 'G7 mira reduzir dependência, China defende controles de minerais essenciais',
        resumo: 'A China defendeu seus controles de exportação de minerais críticos. A declaração surge após o G7 firmar um acordo para intensificar a coordenação e reduzir a dependência de seus membros em relação ao país asiático.',
        imagem: 'https://admin.alpha.cnnbrasil.com.br/wp-content/themes/master-theme/assets/img/fallbackImage.jpg?w=200',
        autor: 'mariajuliablanes', tempo: 'agora'
    },
    {
        id: 120, categoria: 'cidade',
        titulo: 'Goiás lança Olimpíada de IA com prêmios em dinheiro para estudantes',
        resumo: 'Uma nova Olimpíada de Inteligência Artificial foi lançada em Goiás, oferecendo prêmios em dinheiro para estudantes. A iniciativa é uma parceria entre o Centro de Excelência em Inteligência Artificial (Ceia-UFG) e a Secretaria de Estado de Ciência, Tecnologia e Inovação de Goiás (Secti Goiás).',
        imagem: 'https://admin.develop.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/08/inova-jovem-unicamp.jpg?w=200',
        autor: 'paulovito', tempo: 'agora'
    },
    {
        id: 121, categoria: 'brasil',
        titulo: 'Chef denuncia à PF ameaças de grupo ligado a banqueiro Vorcaro',
        resumo: 'Um chef de cozinha procurou a Polícia Federal para denunciar ameaças recebidas de um grupo conhecido como "A Turma", ligado ao banqueiro. Ele afirma ter sido questionado sobre supostas gravações feitas enquanto trabalhava na casa de praia do empresário.',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/06/ANVISA-SUSPENDE.png?w=200',
        autor: 'gabrielaboechat', tempo: 'agora'
    },
    {
        id: 122, categoria: 'brasil',
        titulo: 'Justiça bloqueia quase R$ 500 milhões do Tren de Aragua em ação no Brasil',
        resumo: 'A Justiça brasileira bloqueou quase meio bilhão de reais da facção criminosa Tren de Aragua. Esta é uma das maiores ações já realizadas contra o crime organizado de origem venezuelana em Roraima.',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/06/WhatsApp-Image-2026-06-16-at-07.57.09.jpeg?w=200',
        autor: 'Bruna Lopes', tempo: 'agora'
    },
    {
        id: 123, categoria: 'esportes',
        titulo: 'Investigado por Manipulação, Elye Wahi desfalca Costa do Marfim na Copa',
        resumo: 'O atacante Elye Wahi, da seleção da Costa do Marfim, será desfalque na partida contra a Alemanha pela segunda rodada da Copa. Sua ausência ocorre em meio a uma investigação por suspeita de manipulação de resultados.',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/06/Messi-e-Vini-Jr-e1781784189869.png?w=200',
        autor: 'raulmoura', tempo: 'agora'
    },
    {
        id: 124, categoria: 'brasil',
        titulo: 'PF mira espionagem de autoridades em MG na 2ª fase da Operação Rejeito',
        resumo: 'A Polícia Federal deflagrou nesta manhã (18) a segunda fase da Operação Rejeito em Minas Gerais. A ação cumpre mandados contra um grupo suspeito de espionar autoridades públicas e particulares.',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/15664_9CCA369C2D8A08CC.jpg?w=200',
        autor: 'Bruna Lopes', tempo: 'agora'
    },
    {
        id: 125, categoria: 'esportes',
        titulo: 'Brasil e Argentina na Copa 2026: Clássico pode voltar após 36 anos',
        resumo: 'A Copa do Mundo de 2026 pode ser palco de um aguardado reencontro entre Brasil e Argentina. Os dois gigantes do futebol mundial não se enfrentam em um Mundial desde 1990, na Itália, elevando a expectativa para um possível clássico.',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/06/1-GettyImages-2281445848-e1781621505906.jpg?w=200',
        autor: 'leonardocosta', tempo: 'agora'
    },
    {
        id: 126, categoria: 'esportes',
        titulo: 'Técnico Tuchel e goleiro Pickford têm atrito durante vitória da Inglaterra',
        resumo: 'O técnico Thomas Tuchel e o goleiro Pickford se desentenderam em campo durante uma partida da seleção inglesa. O incidente teria ocorrido enquanto a Inglaterra já vencia a Croácia por 1 a 0, conforme noticiado por um jornal.',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/06/GettyImages-2282099132-e1781738318573.jpg?w=200',
        autor: 'Mariana Valbão', tempo: 'agora'
    },
    {
        id: 127, categoria: 'internacional',
        titulo: 'Acordo EUA-Irã: Superpetroleiros com 6 mi de barris reaparecem em Ormuz',
        resumo: 'Superpetroleiros carregando seis milhões de barris de petróleo bruto revelaram suas rotas em sistemas de rastreamento no Estreito de Ormuz. A visibilidade ocorre após semanas de viagens ocultas pela hidrovia, em um movimento associado à assinatura de um acordo entre Estados Unidos e Irã.',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/06/Captura-de-tela-2026-06-17-195502.png?w=200',
        autor: 'poliannelima', tempo: 'agora'
    },
    {
        id: 128, categoria: 'brasil',
        titulo: 'Drama de Daveigh Chase: Atriz teve vaquinha para casa dias antes de morrer após vida nas ruas',
        resumo: 'Dois dias antes da morte da atriz Daveigh Chase, seu namorado iniciou uma vaquinha online com o objetivo de comprar uma casa para ela. A revelação de que a artista havia rompido com a família e vivido nas ruas adiciona um trágico pano de fundo à campanha.',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/06/benicio-huck-e1781781524534.png?w=200',
        autor: 'mariagiacomelli', tempo: 'agora'
    },
    {
        id: 129, categoria: 'brasil',
        titulo: 'Anvisa recolhe antibiótico por vidro em frasco; fabricante agiu voluntariamente',
        resumo: 'A Anvisa anunciou o recolhimento voluntário de um antibiótico do mercado, após a descoberta de um fragmento de vidro em um frasco. A decisão, tomada pela fabricante, integra uma fiscalização que abrangeu outros sete medicamentos.',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/10/hal-gatewood-_jbClosDsD4-unsplash.jpg?w=200',
        autor: 'giulianazanin', tempo: 'agora'
    },
    {
        id: 130, categoria: 'brasil',
        titulo: 'UFMG: Alemanha lidera chances no mata-mata da Copa com 98,4%; Brasil tem 84%',
        resumo: 'Segundo dados do departamento de matemática da UFMG, a Alemanha possui 98,4% de chances de avançar para o mata-mata da Copa, liderando o ranking. O Brasil também tem alta probabilidade, com 84% de chance de classificação.',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/06/GettyImages-2281278695-e1781292457783.jpg?w=200',
        autor: 'anniefigueiredo', tempo: 'agora'
    },
    {
        id: 131, categoria: 'esportes',
        titulo: 'Desempate na Copa: Regulamento do Mundial prioriza confronto direto entre seleções',
        resumo: 'O regulamento oficial da Copa do Mundo estabelece o critério de desempate para a fase de grupos. A prioridade, em caso de igualdade de pontos, é dada aos confrontos diretos entre as seleções envolvidas. Esta é a primeira regra a ser considerada para definir a classificação.',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/06/17JUN2026COLETIVADANILOLUIZ5-e1781729877385.jpg?w=200',
        autor: 'manuelladalmas', tempo: 'agora'
    },
    {
        id: 132, categoria: 'politica',
        titulo: 'STF Unifica Tese e Amplia Responsabilidade de Big Techs sobre Conteúdo Ilegal',
        resumo: 'O Supremo Tribunal Federal (STF) aprovou por unanimidade uma tese que estabelece maior responsabilidade para plataformas digitais. A decisão obriga big techs a remover conteúdos considerados ilegais em até 60 dias e as responsabiliza por eventuais danos causados por terceiros em suas plataformas.',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/12/pexels-tracy-le-blanc-67789-607812.jpg?w=200',
        autor: 'afonsobenites', tempo: 'agora'
    },
    {
        id: 133, categoria: 'brasil',
        titulo: 'CerradinhoBio registra salto de 90% no lucro em 2025/26, alcançando R$ 372,7 milhões',
        resumo: 'A CerradinhoBio reportou um lucro de R$ 372,7 milhões no ano-safra 2025/26, marcando um crescimento expressivo de 90%. Apesar das condições climáticas adversas que impactaram os canaviais, a companhia conseguiu expandir seu volume processado graças ao aumento da moagem e cana própria.',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/04/acucar-unica-38.jpg?w=200',
        autor: 'gabriellaweiss', tempo: 'agora'
    },
    {
        id: 134, categoria: 'eventos',
        titulo: 'Toy Story 5, A Casa do Dragão e Avatar: Destaques das próximas estreias no cinema e streaming',
        resumo: 'Os próximos dias prometem agitar as telas com o aguardado Toy Story 5, que explora a disputa dos brinquedos contra a tecnologia e o protagonismo de Jessie. A terceira temporada de A Casa do Dragão intensifica a guerra pelo Trono de Ferro, enquanto Avatar: Fogo e Cinzas desembarca no Disney+.',
        imagem: 'https://images.metroimg.com/2026/06/lancamentos.jpg',
        autor: 'Metrópoles', tempo: '4h atrás'
    },
    {
        id: 135, categoria: 'eventos',
        titulo: 'Toy Story: Três décadas de animação e o futuro de Jessie na franquia',
        resumo: 'Com 30 anos de história, a saga Toy Story se mantém na vanguarda da animação. A amada Jessie ganha destaque crescente, indicando uma possível renovação na liderança da icônica franquia cinematográfica.',
        imagem: 'https://images.metroimg.com/2026/06/toy-story-5-2.jpg',
        autor: 'Metrópoles', tempo: '4h atrás'
    },
];

const videos = [
    {
        id: 1, titulo: 'Jaques Wagner, líder do governo Lula, é alvo de operação no Caso Master - BORA BRASIL - 18/06/2026',
        thumb: 'https://img.youtube.com/vi/qP_U4m1ppq0/hqdefault.jpg', duracao: '08:00',
        videoId: 'qP_U4m1ppq0', embedUrl: 'https://www.youtube.com/embed/qP_U4m1ppq0'
    },
    {
        id: 2, titulo: '[AO VIVO] JORNAL DA BAND - 18/06/2026',
        thumb: 'https://img.youtube.com/vi/WNFArYLrfDg/hqdefault.jpg', duracao: '1:30:00',
        videoId: 'WNFArYLrfDg', embedUrl: 'https://www.youtube.com/embed/WNFArYLrfDg'
    },
    {
        id: 3, titulo: 'AO VIVO: LIVE CNN - 18/06/2026',
        thumb: 'https://img.youtube.com/vi/PvF7TSPvn74/hqdefault.jpg', duracao: '1:30:00',
        videoId: 'PvF7TSPvn74', embedUrl: 'https://www.youtube.com/embed/PvF7TSPvn74'
    },
    {
        id: 4, titulo: 'AO VIVO: O BRASIL VAI GOLEAR? CR7 DECEPCIONA E INGLATERRA SE FIRMA COMO FAVORITA',
        thumb: 'https://img.youtube.com/vi/4pgGSpzJbxQ/hqdefault.jpg', duracao: '1:30:00',
        videoId: '4pgGSpzJbxQ', embedUrl: 'https://www.youtube.com/embed/4pgGSpzJbxQ'
    },
    {
        id: 5, titulo: 'MORNING SHOW - 18/06/26',
        thumb: 'https://img.youtube.com/vi/nFLcHUMWdpU/hqdefault.jpg', duracao: '08:00',
        videoId: 'nFLcHUMWdpU', embedUrl: 'https://www.youtube.com/embed/nFLcHUMWdpU'
    },
    {
        id: 6, titulo: 'ENDRICK SERÁ TITULAR VS HAITI? CR7 PASSA VERGONHA E KANE DOUTRINA EM ESTREIA! | BASTIDORES DA COPA',
        thumb: 'https://img.youtube.com/vi/IpFlsuVWy3A/hqdefault.jpg', duracao: '08:00',
        videoId: 'IpFlsuVWy3A', embedUrl: 'https://www.youtube.com/embed/IpFlsuVWy3A'
    },
    {
        id: 7, titulo: '🔴 AO VIVO: NEWS MANHÃ, com Lívia Zanolini | 18/06/2026 | SBT NEWS',
        thumb: 'https://img.youtube.com/vi/Ou0RJj8q94s/hqdefault.jpg', duracao: '1:30:00',
        videoId: 'Ou0RJj8q94s', embedUrl: 'https://www.youtube.com/embed/Ou0RJj8q94s'
    },
    {
        id: 8, titulo: 'RADAR NEWS | 18/06/2026',
        thumb: 'https://img.youtube.com/vi/Vn4PvHauqTk/hqdefault.jpg', duracao: '08:00',
        videoId: 'Vn4PvHauqTk', embedUrl: 'https://www.youtube.com/embed/Vn4PvHauqTk'
    },
];

const breakingNews = [
    'URGENTE: Câmara de SP debate revitalização urbana com alerta da Fazenda sobre incentivos fiscais.',
    'AGORA: CCJ da Câmara de SP avança em debate crucial sobre ruídos e aprova dezenas de projetos.',
    'ÚLTIMA HORA: Câmara de SP abre consulta pública inédita para registros completos de sessões e audiências.',
];

const cotacoes = [
    { nome: 'Dólar', icone: 'attach_money', valor: 'R$ 5.17', variacao: '+0.8%', direcao: 'up' },
    { nome: 'Euro', icone: 'euro', valor: 'R$ 5.92', variacao: '+0.5%', direcao: 'up' },
    { nome: 'Ibovespa', icone: 'show_chart', valor: '168.192', variacao: '-0.2%', direcao: 'down' },
    { nome: 'Soja (sc)', icone: 'eco', valor: 'R$ 129.71', variacao: '+1.0%', direcao: 'up' },
    { nome: 'Milho (sc)', icone: 'grass', valor: 'R$ 50.88', variacao: '-0.6%', direcao: 'down' },
    { nome: 'Café (sc)', icone: 'coffee', valor: 'R$ 1886', variacao: '-0.3%', direcao: 'down' },
    { nome: 'Algodão (@)', icone: 'agriculture', valor: 'R$ 135.61', variacao: '+3.6%', direcao: 'up' },
    { nome: 'Trigo (sc)', icone: 'bakery_dining', valor: 'R$ 70', variacao: '+0.9%', direcao: 'up' },
    { nome: 'Ouro (g)', icone: 'diamond', valor: 'R$ 708.24', variacao: '-1.8%', direcao: 'down' },
    { nome: 'Petrobras', icone: 'oil_barrel', valor: 'R$ 38.07', variacao: '-1.3%', direcao: 'down' },
    { nome: 'Vale', icone: 'landscape', valor: 'R$ 79.23', variacao: '-0.7%', direcao: 'down' },
    { nome: 'Itaú', icone: 'account_balance', valor: 'R$ 40.85', variacao: '+0.1%', direcao: 'up' },
    { nome: 'Bradesco', icone: 'account_balance', valor: 'R$ 17.55', variacao: '+0.0%', direcao: 'up' },
    { nome: 'Banco do Brasil', icone: 'account_balance', valor: 'R$ 19.36', variacao: '-0.3%', direcao: 'down' },
    { nome: 'S&P 500', icone: 'public', valor: '7420', variacao: '-1.2%', direcao: 'down' },
    { nome: 'Dow Jones', icone: 'public', valor: '51.493', variacao: '-1.0%', direcao: 'down' },
    { nome: 'Boi Gordo (@)', icone: 'pets', valor: 'R$ --', variacao: '0.0%', direcao: 'up' },
    { nome: 'Arroz (sc)', icone: 'rice_bowl', valor: 'R$ 81.23', variacao: '+0.0%', direcao: 'up' },
    { nome: 'Bitcoin', icone: 'currency_bitcoin', valor: 'R$ 331.440', variacao: '+0.8%', direcao: 'up' },
];

const clima = {
    cidade: 'São Paulo', estado: 'SP',
    temperatura: 16, temp_min: 15, temp_max: 17,
    umidade: 59, condicao: 'Céu Limpo',
    icone: 'wb_sunny', vento: 20.9
};

const trending = [
    '#FrenteFriaSP #GMAXNoticias #SãoPaulo',
    '#SPDestaqueNacional #GMAXNoticias #SãoPaulo',
    '#TrânsitoSeguroSP #GMAXNoticias #SãoPaulo',
    '#ConcursoPúblicoSP #GMAXNoticias #SãoPaulo',
    '#InclusãoSP #ViverSemLimite #GMAXNoticias #SãoPaulo',
    '#EconomiaSP #RepresentantesComerciais #GMAXNoticias #SãoPaulo',
];
