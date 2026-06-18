/* GMAX NOTÍCIAS — Base de Dados v2.0
   Atualizado: 18/06/2026 08:00 */

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
        destaque: true,
        titulo: 'Câmara Municipal de SP: Acesse Contatos Essenciais de Departamentos e Ouvidoria',
        resumo: 'A Câmara Municipal de São Paulo disponibiliza uma lista completa de telefones e e-mails para facilitar a comunicação com seus diversos departamentos. Cidadãos podem acessar diretamente setores como Secretaria Geral Administrativa, Procuradoria e Ouvidoria, além dos gabinetes dos vereadores, promoven',
        imagem: 'https://images.pexels.com/photos/31283302/pexels-photo-31283302.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Câmara Municipal de São Paulo', tempo: '20 min atrás'
    },
    {
        id: 2, categoria: 'politica',
        destaque: true,
        titulo: 'Câmara de SP presta homenagens a personalidades em sessões solenes recentes',
        resumo: 'Em sessões solenes recentes, a Câmara Municipal de São Paulo concedeu honrarias a quatro personalidades. A arquiteta Ermínia Maricato e o cônsul de Portugal, António Pedro Rodrigues da Silva, foram titulados Cidadãos Paulistanos. Os advogados Rodrigo Sayeg e Ricardo Vita Porto receberam a Medalha An',
        imagem: 'https://www.saopaulo.sp.leg.br/wp-content/uploads/2026/06/55342201710_734701633b_c.jpg',
        autor: 'Câmara Municipal de São Paulo', tempo: '21 min atrás'
    },
    {
        id: 3, categoria: 'politica',
        destaque: true,
        titulo: 'Câmara de SP: Homenagem a Ermínia Maricato e aprovação de reajuste para GCM',
        resumo: 'A Câmara Municipal de São Paulo teve uma quarta-feira (17/06) de importantes deliberações. A arquiteta e urbanista Ermínia Maricato foi homenageada com o Título de Cidadã Paulistana, enquanto os vereadores aprovaram o reajuste salarial para o quadro técnico da Guarda Civil Metropolitana. Diversas co',
        imagem: 'https://www.saopaulo.sp.leg.br/wp-content/uploads/2026/06/55342201710_734701633b_c.jpg',
        autor: 'Câmara Municipal de São Paulo', tempo: '21 min atrás'
    },
    {
        id: 4, categoria: 'politica',
        destaque: true,
        titulo: 'Câmara de SP Lança Prêmios para Impulsionar Cidadania e Educação',
        resumo: 'A Câmara Municipal de São Paulo lançou prêmios institucionais com o objetivo de incentivar ações, projetos e empreendimentos que contribuam para o desenvolvimento da cidadania, a qualidade de ensino e a divulgação do potencial da capital. As premiações visam reconhecer iniciativas que impactam posit',
        imagem: 'https://www.saopaulo.sp.leg.br/wp-content/uploads/2025/07/sabotage_selo_site_2026.png',
        autor: 'Câmara Municipal de São Paulo', tempo: '20 min atrás'
    },
    {
        id: 5, categoria: 'politica',
        titulo: 'Câmara de São Paulo: O Que Fazem os 55 Vereadores da Capital?',
        resumo: 'A Câmara Municipal de São Paulo é composta por 55 vereadores responsáveis por fiscalizar o Poder Executivo e legislar. Eles criam, aprovam e modificam leis, além de debater temas cruciais para a cidade em comissões técnicas e Audiências Públicas.',
        imagem: 'https://images.pexels.com/photos/31283302/pexels-photo-31283302.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Câmara Municipal de São Paulo', tempo: '20 min atrás'
    },
    {
        id: 6, categoria: 'politica',
        titulo: 'Câmara de SP: EJA ganha Frente Parlamentar; Capoeira e Antirracismo avançam em debates',
        resumo: 'A Câmara Municipal de São Paulo instalou a Frente Parlamentar em Defesa da EJA (Educação para Jovens e Adultos) nesta terça-feira. Outras frentes, como a da Capoeira e Antirracista, realizaram reuniões recentes para discutir políticas públicas, implementação de programas e orçamentos municipais.',
        imagem: 'https://www.saopaulo.sp.leg.br/wp-content/uploads/2026/06/55338788402_14f7b0a674_c.jpg',
        autor: 'Câmara Municipal de São Paulo', tempo: '20 min atrás'
    },
    {
        id: 7, categoria: 'politica',
        titulo: 'Comissão da Câmara de SP debate gestão de parcerias e avança em pautas importantes',
        resumo: 'A Comissão de Administração Pública da Câmara Municipal de São Paulo discutiu recentemente diretrizes para parcerias com OSCs, permitindo participação virtual. O colegiado também debateu o reajuste salarial da GCM e aprovou 20 projetos em maio, como a proibição de celulares em escolas e o fomento ao',
        imagem: 'https://www.saopaulo.sp.leg.br/wp-content/uploads/2026/06/55339811996_5fb2e84677_c.jpg',
        autor: 'Câmara Municipal de São Paulo', tempo: '20 min atrás'
    },
    {
        id: 8, categoria: 'brasil',
        titulo: 'CMSP Publica Organograma Completo para Transparência',
        resumo: 'A Câmara Municipal de São Paulo (CMSP) disponibilizou o organograma completo de suas unidades. O documento, de 174 KB, detalha a estrutura interna do órgão, reforçando o compromisso com a transparência na administração pública paulistana.',
        imagem: 'https://images.pexels.com/photos/14357175/pexels-photo-14357175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Câmara Municipal de São Paulo', tempo: '21 min atrás'
    },
    {
        id: 9, categoria: 'politica',
        titulo: 'Prêmio Beth Lobo da Alesp reconhece luta por direitos das mulheres e combate à violência',
        resumo: 'O Prêmio Beth Lobo de Direitos Humanos das Mulheres, da Alesp, foi criado em 2012. A honraria anual reconhece e incentiva a atuação pela defesa dos direitos femininos e combate à violência. O nome homenageia a socióloga Elisabeth Lobo, pioneira em estudos de gênero no Brasil.',
        imagem: 'https://images.pexels.com/photos/30256874/pexels-photo-30256874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Assembleia Legislativa SP', tempo: '20 min atrás'
    },
    {
        id: 10, categoria: 'politica',
        titulo: 'Alesp oferece sistema gratuito para cidadão acompanhar leis e processos por e-mail',
        resumo: 'A Assembleia Legislativa de São Paulo (Alesp) oferece um sistema gratuito para que cidadãos possam acompanhar projetos de lei e processos legislativos. Basta se cadastrar no portal, selecionar os temas de interesse e receber notificações automáticas por e-mail sobre as atualizações. A iniciativa pro',
        imagem: 'https://images.pexels.com/photos/30256874/pexels-photo-30256874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Assembleia Legislativa SP', tempo: '19 min atrás'
    },
    {
        id: 11, categoria: 'politica',
        titulo: 'Assembleia Paulista Expõe Acervo Essencial de Estudos, Leis e Prevenção ao Assédio',
        resumo: 'A Assembleia Paulista disponibilizou um acervo abrangente de estudos, manuais e documentos essenciais para consulta pública. O material oferece suporte às atividades legislativas, detalha a legislação estadual contextualizada e serve como guia para o processo legislativo, com foco na prevenção e com',
        imagem: 'https://images.pexels.com/photos/31911479/pexels-photo-31911479.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Assembleia Legislativa SP', tempo: '15 min atrás'
    },
    {
        id: 12, categoria: 'brasil',
        titulo: 'Comissões da Verdade: O Legado da Ditadura e a Busca por Justiça de Transição no Brasil',
        resumo: 'A ditadura militar brasileira (1964-1985) impôs intensa repressão e graves violações de direitos humanos. As Comissões da Verdade, criadas pela luta de familiares e finalizadas em 2015, foram cruciais para a reparação e a aplicação da justiça de transição, focada em verdade e memória.',
        imagem: 'https://images.pexels.com/photos/14357175/pexels-photo-14357175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Assembleia Legislativa SP', tempo: '19 min atrás'
    },
    {
        id: 13, categoria: 'cidade',
        titulo: 'São Paulo em Alerta: Frente Fria Traz Mínima de 8°C Nesta Quinta-feira',
        resumo: 'A capital paulista se prepara para uma quinta-feira de frio intenso, com a previsão de que os termômetros registrem uma temperatura mínima de 8°C. A frente fria que atua na região deve se intensificar, prometendo um dia gelado para os moradores.',
        imagem: 'https://images.pexels.com/photos/16063741/pexels-photo-16063741.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '4h atrás'
    },
    {
        id: 14, categoria: 'cidade',
        titulo: 'São Paulo lidera ranking nacional de Selos Arte concedidos a artesãos',
        resumo: 'O estado de São Paulo alcançou a marca de maior número de Selos Arte concedidos a produtores artesanais em todo o país. A conquista reforça a valorização e o reconhecimento do setor artesanal paulista.',
        imagem: 'https://images.pexels.com/photos/12497049/pexels-photo-12497049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: 'agora'
    },
    {
        id: 15, categoria: 'cidade',
        titulo: 'São Paulo Reduz Mortes no Trânsito em 10,1% no Balanço de Maio',
        resumo: 'O Estado de São Paulo registrou uma queda de 10,1% no número de mortes no trânsito durante o mês de maio. Os dados indicam uma redução significativa nos óbitos decorrentes de acidentes nas vias paulistas.',
        imagem: 'https://images.pexels.com/photos/4062988/pexels-photo-4062988.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '1d atrás'
    },
    {
        id: 16, categoria: 'cidade',
        titulo: 'Defesa Civil de SP alerta para queda de temperaturas no estado',
        resumo: 'A Defesa Civil de São Paulo emitiu um alerta sobre a previsão de queda nas temperaturas em todo o estado. O órgão orienta a população a se preparar para as mudanças climáticas esperadas, visando a segurança e o bem-estar de todos.',
        imagem: 'https://images.pexels.com/photos/12497049/pexels-photo-12497049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '7h atrás'
    },
    {
        id: 17, categoria: 'brasil',
        titulo: 'PMESP reforça segurança com 194 novas viaturas e 400 fuzis no Estado',
        resumo: 'A Polícia Militar do Estado de São Paulo (PMESP) recebeu um significativo reforço em sua capacidade operacional com a entrega de 194 novas viaturas e 400 fuzis. A medida visa intensificar a segurança pública e otimizar as ações de patrulhamento e combate ao crime em todo o território paulista.',
        imagem: 'https://images.pexels.com/photos/7714859/pexels-photo-7714859.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '12h atrás'
    },
    {
        id: 18, categoria: 'economia',
        titulo: 'Representantes Comerciais: Peça-Chave em Cada Setor da Maior Economia do Brasil em SP',
        resumo: 'Os representantes comerciais demonstram uma presença abrangente em São Paulo, atuando em cada setor da maior economia do Brasil. Essa capilaridade profissional destaca a relevância fundamental da categoria para o dinamismo e a interconexão do mercado paulista.',
        imagem: 'https://images.pexels.com/photos/10531120/pexels-photo-10531120.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '13h atrás'
    },
    {
        id: 19, categoria: 'cidade',
        titulo: 'IBGE Marca Presença em Feira de Geotecnologias na Capital Paulista',
        resumo: 'O Instituto Brasileiro de Geografia e Estatística (IBGE) marca sua presença na feira de geotecnologias realizada em São Paulo. A participação da instituição destaca sua relevância e contribuição no setor.',
        imagem: 'https://images.pexels.com/photos/16063741/pexels-photo-16063741.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '14h atrás'
    },
    {
        id: 20, categoria: 'cidade',
        titulo: 'Saneamento: Seis Cidades de SP Conquistam Nota Máxima no Brasil',
        resumo: 'Seis municípios do estado de São Paulo alcançaram a nota máxima em saneamento básico no Brasil. Este reconhecimento destaca a excelência e o compromisso dessas cidades com a infraestrutura e a qualidade de vida de seus habitantes.',
        imagem: 'https://images.pexels.com/photos/12497049/pexels-photo-12497049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '12h atrás'
    },
    {
        id: 21, categoria: 'politica',
        titulo: 'MDHC promove encontro em SP para fortalecer inclusão e o Novo Viver sem Limite',
        resumo: 'O Ministério dos Direitos Humanos e da Cidadania (MDHC) promove em São Paulo um encontro nacional de gestores da política para pessoas com deficiência. O evento visa debater e fortalecer iniciativas cruciais, com foco na inclusão no mercado de trabalho e no programa Novo Viver sem Limite.',
        imagem: 'https://images.pexels.com/photos/30256874/pexels-photo-30256874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '13h atrás'
    },
    {
        id: 22, categoria: 'cidade',
        titulo: 'Soltura de suspeito de ataque no Metrô de SP revolta pai de vítima',
        resumo: 'O pai de uma jovem atacada no Metrô de São Paulo manifestou indignação com a soltura do suspeito. Ele criticou a decisão da Justiça, levantando preocupações sobre a segurança pública e a impunidade.',
        imagem: 'https://images.pexels.com/photos/12497049/pexels-photo-12497049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '2h atrás'
    },
    {
        id: 23, categoria: 'brasil',
        titulo: 'Motorista morre após colidir com portaria em Alphaville; investigação busca esclarecimentos',
        resumo: 'Um motorista faleceu em Alphaville, São Paulo, após seu veículo colidir contra a portaria de um condomínio na região. As autoridades iniciaram uma investigação para apurar as causas do acidente e os detalhes que levaram à morte do condutor, buscando esclarecer o ocorrido.',
        imagem: 'https://images.pexels.com/photos/14357175/pexels-photo-14357175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '23h atrás'
    },
    {
        id: 24, categoria: 'brasil',
        titulo: 'Instrutores de salto presos em SP se negam a depor sobre jovem lançado sem cordas',
        resumo: 'Instrutores de salto foram presos em São Paulo após um jovem ser lançado sem equipamentos de segurança. Os detidos se recusaram a prestar depoimento à polícia, mantendo o silêncio sobre o incidente.',
        imagem: 'https://images.pexels.com/photos/14357175/pexels-photo-14357175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '1d atrás'
    },
    {
        id: 25, categoria: 'cidade',
        titulo: 'Setor de Turismo em São Paulo Supera 350 Mil Empresas Ativas',
        resumo: 'O estado de São Paulo registra mais de 350 mil empresas ativas no setor de turismo. Esse número expressivo demonstra a força e a dimensão da cadeia produtiva turística paulista, contribuindo significativamente para a economia local.',
        imagem: 'https://images.pexels.com/photos/12497049/pexels-photo-12497049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: 'agora'
    },
    {
        id: 26, categoria: 'cidade',
        titulo: 'SP: Polícia encontra foto de residência de criança em táxi de tentativa de sequestro na Zona Leste',
        resumo: 'A Polícia Civil de São Paulo encontrou um envelope com a foto da casa de uma criança. O item foi localizado dentro de um táxi na Zona Leste, veículo que teria sido utilizado em uma tentativa de sequestro na região.',
        imagem: 'https://images.pexels.com/photos/12497049/pexels-photo-12497049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '4h atrás'
    },
    {
        id: 27, categoria: 'brasil',
        titulo: 'Incêndio de grandes proporções devasta casas em Paraisópolis, SP',
        resumo: 'Um incêndio de grandes proporções foi registrado em Paraisópolis, São Paulo. O incidente afetou diversas casas na comunidade.',
        imagem: 'https://images.pexels.com/photos/14357175/pexels-photo-14357175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: 'agora'
    },
    {
        id: 28, categoria: 'brasil',
        titulo: 'ETFs de Renda Fixa Crescem 10x em 6 Anos e Desafiam Tesouro Direto',
        resumo: 'O mercado de ETFs de renda fixa no Brasil experimentou um crescimento notável, multiplicando seu volume por dez nos últimos seis anos. Essa expansão posiciona os ETFs como uma alternativa robusta, levantando a discussão sobre sua performance e potenciais vantagens frente a investimentos tradicionais',
        imagem: 'https://images.pexels.com/photos/14357175/pexels-photo-14357175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: 'agora'
    },
    {
        id: 29, categoria: 'brasil',
        titulo: 'PF deflagra nova fase da Compliance Zero com 18 mandados de busca e apreensão',
        resumo: 'A Polícia Federal (PF) deflagrou uma nova fase da Operação Compliance Zero. A ação resultou no cumprimento de 18 mandados de busca e apreensão.',
        imagem: 'https://images.pexels.com/photos/14357175/pexels-photo-14357175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: 'agora'
    },
    {
        id: 30, categoria: 'brasil',
        titulo: 'Espetáculo Celestial: Conjunção de Lua, Vênus, Júpiter e Mercúrio em 2026',
        resumo: 'Um evento astronômico notável está previsto para 2026, com a Lua, Vênus, Júpiter e Mercúrio alinhando-se no céu. Um professor de física descreveu o fenômeno como uma das mais belas conjunções do ano.',
        imagem: 'https://images.pexels.com/photos/14357175/pexels-photo-14357175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '12h atrás'
    },
    {
        id: 31, categoria: 'politica',
        titulo: 'Morte de jovem leva União a fechar ponte em SP; demolição é avaliada',
        resumo: 'A União determinou o fechamento de uma ponte entre Limeira e Cordeirópolis, no interior paulista, após a morte de um jovem. A estrutura está sob avaliação para possível demolição, medida que busca evitar novas ocorrências na região.',
        imagem: 'https://i0.statig.com.br/bancodeimagens/co/we/1q/cowe1qguj1f11k27a67msqu0q.jpg',
        autor: 'Thayna Gemin, Thayna Gemin', tempo: '20h atrás'
    },
    {
        id: 32, categoria: 'cidade',
        titulo: 'PM é assassinado em assalto durante pedalada na Zona Leste de SP',
        resumo: 'Um policial militar foi morto a tiros na Zona Leste de São Paulo. O crime ocorreu durante um assalto enquanto a vítima praticava ciclismo na região.',
        imagem: 'https://images.pexels.com/photos/12497049/pexels-photo-12497049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '9h atrás'
    },
    {
        id: 33, categoria: 'politica',
        titulo: 'Trump alerta para perigo político no Brasil e se confunde ao citar membros da família Bolsonaro',
        resumo: 'O ex-presidente dos Estados Unidos, Donald Trump, expressou preocupação com a situação política do Brasil, classificando-a como perigosa. Em sua declaração, Trump também demonstrou confusão ao se referir aos membros da família Bolsonaro.',
        imagem: 'https://images.pexels.com/photos/30256874/pexels-photo-30256874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '14h atrás'
    },
    {
        id: 34, categoria: 'brasil',
        titulo: 'Labubu desembarca no Brasil com colecionáveis a partir de R$ 299,99',
        resumo: 'Os bonecos colecionáveis Labubu chegam ao Brasil nesta quinta-feira, marcando a entrada da popular franquia no mercado nacional. Os itens estarão disponíveis para compra com valores iniciais de R$ 299,99.',
        imagem: 'https://images.pexels.com/photos/14357175/pexels-photo-14357175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '4h atrás'
    },
    {
        id: 35, categoria: 'brasil',
        titulo: 'Marcelo D2 recebe Medalha Tiradentes em solenidade hoje',
        resumo: 'O renomado cantor e compositor Marcelo D2 é agraciado hoje com a Medalha Tiradentes, uma das mais importantes honrarias concedidas no Brasil. A condecoração celebra sua significativa contribuição à cultura e à arte nacional.',
        imagem: 'https://images.pexels.com/photos/14357175/pexels-photo-14357175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: 'agora'
    },
    {
        id: 36, categoria: 'brasil',
        titulo: 'Violência em Guarulhos: Passageira agride 4 funcionárias da Latam no check-in',
        resumo: 'Uma passageira agrediu quatro funcionárias da Latam no Aeroporto Internacional de São Paulo, em Guarulhos. O incidente, que gerou tumulto, aconteceu após uma discussão acalorada no balcão de check-in da empresa.',
        imagem: 'https://images.pexels.com/photos/14357175/pexels-photo-14357175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '22h atrás'
    },
    {
        id: 37, categoria: 'politica',
        titulo: 'Trump afirma diálogo com Lula no G7 e classifica Brasil como "país politicamente difícil"',
        resumo: 'O ex-presidente dos EUA, Donald Trump, declarou ter conversado com o presidente Lula durante o G7 e descreveu o Brasil como um "país politicamente difícil". Em suas falas, Trump também demonstrou confusão ao se referir aos filhos do ex-presidente Jair Bolsonaro.',
        imagem: 'https://images.pexels.com/photos/30256874/pexels-photo-30256874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '14h atrás'
    },
    {
        id: 38, categoria: 'economia',
        titulo: 'Copom reduz taxa básica de juros Selic para 14,25% ao ano',
        resumo: 'O Comitê de Política Monetária (Copom) do Banco Central decidiu reduzir a taxa básica de juros, a Selic, para 14,25% ao ano. A medida, anunciada pela Agência Brasil, representa um ajuste na política econômica nacional.',
        imagem: 'https://images.pexels.com/photos/10531120/pexels-photo-10531120.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '9h atrás'
    },
    {
        id: 39, categoria: 'esportes',
        titulo: 'Vôlei Feminino: Brasil Enfrenta Bélgica Pela VNL; Veja Onde Assistir e Horário',
        resumo: 'A Seleção Brasileira de vôlei feminino tem um importante confronto contra a Bélgica pela Liga das Nações (VNL). Os torcedores estão ansiosos pelos detalhes de transmissão e horário da partida para acompanhar cada lance.',
        imagem: 'https://images.pexels.com/photos/35142168/pexels-photo-35142168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '11h atrás'
    },
    {
        id: 40, categoria: 'eventos',
        titulo: 'Tempo firme predomina em São Paulo nesta quinta-feira (18)',
        resumo: 'A capital paulista terá uma quinta-feira (18) de tempo estável. A previsão indica predominância de sol e ausência de chuvas, garantindo um dia de condições climáticas firmes em toda a região metropolitana.',
        imagem: 'https://images.pexels.com/photos/16063741/pexels-photo-16063741.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '9h atrás'
    },
    {
        id: 41, categoria: 'politica',
        titulo: 'TCE-SP aprova contas do governo Tarcísio de 2025 com ressalvas',
        resumo: 'O Tribunal de Contas do Estado de São Paulo (TCE-SP) aprovou as contas do governo Tarcísio de Freitas referentes ao ano de 2025. A decisão, no entanto, veio acompanhada de ressalvas, indicando pontos que necessitam de atenção ou correção na gestão estadual.',
        imagem: 'https://images.pexels.com/photos/30256874/pexels-photo-30256874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '8h atrás'
    },
    {
        id: 42, categoria: 'cidade',
        titulo: 'Mulher brutalmente agredida no Metrô de SP sofre múltiplas fraturas e teme por vida',
        resumo: 'Uma mulher foi brutalmente agredida dentro do Metrô de São Paulo, sofrendo fraturas graves no joelho, maxilar e nariz. A vítima afirmou que o ataque não teve motivação de roubo, mas sim a intenção do agressor de tirar sua vida.',
        imagem: 'https://images.pexels.com/photos/12497049/pexels-photo-12497049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '1d atrás'
    },
    {
        id: 43, categoria: 'brasil',
        titulo: 'Lámen em SP: Guia revela estilos e criações autorais para aquecer o inverno',
        resumo: 'Com a chegada do frio, a capital paulista se torna um palco para os amantes de lámen. Um guia gastronômico destaca a diversidade de estilos e as inovações culinárias, incluindo receitas autorais. Descubra os melhores endereços para saborear essa iguaria japonesa em São Paulo.',
        imagem: 'https://images.pexels.com/photos/14357175/pexels-photo-14357175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '6h atrás'
    },
    {
        id: 44, categoria: 'politica',
        titulo: 'Minha Casa Minha Vida: Araçatuba divulga pré-selecionados para Lyon e Sete',
        resumo: 'A Prefeitura Municipal de Araçatuba publicou a lista de candidatos pré-selecionados para o Programa Minha Casa Minha Vida (PMCMV). A relação abrange os empreendimentos habitacionais Lyon e Sete, representando um passo importante para os futuros beneficiários da cidade.',
        imagem: 'https://images.pexels.com/photos/30256874/pexels-photo-30256874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '11h atrás'
    },
    {
        id: 45, categoria: 'cidade',
        titulo: 'Festa da Polenta a 2h de SP Oferece 5 Toneladas de Comida e Entrada Gratuita',
        resumo: 'A tradicional Festa da Polenta, a apenas duas horas de São Paulo, promete uma experiência gastronômica imperdível. O evento, com entrada gratuita, servirá até cinco toneladas de comida típica. No entanto, os interessados devem se apressar, pois a celebração tem duração de apenas três dias.',
        imagem: 'https://images.pexels.com/photos/12497049/pexels-photo-12497049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '11h atrás'
    },
    {
        id: 46, categoria: 'brasil',
        titulo: 'Brasil atinge recorde de frio: menor temperatura de 2026 é registrada',
        resumo: 'O Brasil registrou a menor temperatura de 2026, marcando um novo recorde de frio no ano. Detalhes sobre a localidade exata onde a marca foi atingida serão divulgados em breve, confirmando uma intensa onda gelada no país.',
        imagem: 'https://images.pexels.com/photos/14357175/pexels-photo-14357175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '10h atrás'
    },
    {
        id: 47, categoria: 'internacional',
        titulo: 'Trump abre G7 com provocação irônica aos líderes',
        resumo: 'Donald Trump, presidente dos EUA, abriu a reunião com líderes do G7 nesta quarta-feira (17) com uma declaração irônica. Segundo relatos, ele teria afirmado "Eu sou o chefe", marcando o início do encontro com um tom provocativo.',
        imagem: 'https://www.diariodocentrodomundo.com.br/wp-content/uploads/2026/06/imagem-principal-trump-abre-reuniao-g7-eu-sou-o-chefe-2026-06-17t085318z-33442718-rc2kvlazuq5g-rtrmadp-3-g7-summit-scaled.jpg',
        autor: 'Diario do Centro do Mundo', tempo: '20h atrás'
    },
    {
        id: 48, categoria: 'internacional',
        titulo: 'Lula no G7: Brasil prioriza negociação de tarifas de Trump para conter impactos econômicos',
        resumo: 'O presidente Lula prioriza na reunião do G7, na França, a negociação das novas tarifas impostas pelos Estados Unidos em junho. O governo brasileiro busca reverter as medidas de Donald Trump para proteger a economia nacional e evitar maiores impactos comerciais.',
        imagem: 'https://www.diariodocentrodomundo.com.br/wp-content/uploads/2026/06/lula-trump-aperto-de-mao-4.jpg',
        autor: 'Augusto de Sousa', tempo: '21h atrás'
    },
    {
        id: 49, categoria: 'eventos',
        titulo: 'TST condena banco por dano moral em exposição de ranking de produtividade',
        resumo: 'A 6ª Turma do Tribunal Superior do Trabalho (TST) reconheceu, por unanimidade, o dano moral a uma gerente de negócios de São Paulo. A decisão ocorreu devido à exposição de rankings de produtividade de empregados por um banco e sua fundação, que causou constrangimento à funcionária.',
        imagem: 'https://www.conjur.com.br/wp-content/uploads/2026/06/exhausted-headache-woman-customer-service-consultant-with-computer-office-with-burnout-crm-migraine-stress-female-with-headset-technical-support-telemarketing-call-center-scaled.jpg',
        autor: 'Sem autor', tempo: '20h atrás'
    },
    {
        id: 50, categoria: 'eventos',
        titulo: 'Mercados em alerta: Fed e BC anunciam novas taxas de juros nesta quarta',
        resumo: 'A quarta-feira é marcada pela expectativa de anúncios importantes sobre as taxas de juros. O Federal Reserve dos EUA e o Banco Central do Brasil divulgarão suas decisões, que devem influenciar diretamente os mercados financeiros globais e locais.',
        imagem: 'https://s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/public/fb_marca.png',
        autor: '', tempo: '21h atrás'
    },
    {
        id: 51, categoria: 'brasil',
        titulo: 'Justiça condena hospital a indenizar gestante por desrespeito e falha em apoio durante parto',
        resumo: 'Um hospital foi condenado pela Justiça a indenizar uma gestante. A decisão se deu após um juiz considerar que a equipe médica não prestou o apoio adequado à paciente durante a necessidade de uma cirurgia cesariana, configurando desrespeito.',
        imagem: 'https://i.metroimg.com/zCEPxaloVBkJHTgXan8YvE5OLggcYYq_P_0wQkopI3I/rs:fill:1200:800:1/g:no/q:85/f:webp/plain/https://images.metroimg.com/2026/06/bebe-recem-nascido-1.jpg',
        autor: 'Metrópoles', tempo: '20h atrás'
    },
    {
        id: 52, categoria: 'politica',
        titulo: 'STF condena Eduardo Bolsonaro a 4 anos e 2 meses de prisão por coação',
        resumo: 'O Supremo Tribunal Federal (STF) condenou o ex-deputado federal Eduardo Bolsonaro. A decisão impôs uma pena de quatro anos e dois meses de prisão ao político, acusado de coação no curso do processo.',
        imagem: 'https://ichef.bbci.co.uk/news/1024/branded_portuguese/3b3d/live/57a8ab20-6a22-11f1-8546-8f19e4fe30f4.jpg',
        autor: 'https://www.facebook.com/bbcnews', tempo: '23h atrás'
    },
    {
        id: 53, categoria: 'politica',
        titulo: 'Contradição: Lula critica bilionários, mas PT subsidiou \'campeões nacionais\'',
        resumo: 'A retórica do presidente Lula contra "políticas pró-bilionários" é confrontada por análises. Elas sugerem que os subsídios estatais a "campeões nacionais", implementados nos governos do PT, poderiam ser um exemplo das práticas que ele critica.',
        imagem: 'https://veja.abril.com.br/wp-content/uploads/2026/06/Lula-Ricardo-Stuckert.jpg?quality=70&strip=info&resize=1080,565&crop=1',
        autor: 'José Casado', tempo: '20h atrás'
    },
    {
        id: 54, categoria: 'politica',
        titulo: 'Eleições: Novo Datafolha intensifica embate entre Lula e Flávio',
        resumo: 'A corrida eleitoral esquenta a menos de quatro meses do primeiro turno. Um novo levantamento Datafolha traz os últimos números que agitam a disputa entre Lula e Flávio, reacendendo o debate político.',
        imagem: 'https://veja.abril.com.br/wp-content/uploads/2026/06/lula-flavio-bolsonaro-7.jpg?quality=70&strip=info&resize=1080,565&crop=1',
        autor: 'Felipe Barbosa', tempo: '21h atrás'
    },
    {
        id: 55, categoria: 'brasil',
        titulo: 'Alerta em São Paulo: Lagoinha registra novo caso de febre amarela',
        resumo: 'Um novo caso de febre amarela foi confirmado na cidade de Lagoinha, localizada no interior do estado de São Paulo. A ocorrência foi registrada e a notícia divulgada pela Agência Brasil.',
        imagem: 'https://images.pexels.com/photos/14357175/pexels-photo-14357175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '13h atrás'
    },
    {
        id: 56, categoria: 'politica',
        titulo: 'Trump no G7: Presidente dos EUA alega planos de prender Bolsonaro Jr. no Brasil',
        resumo: 'Durante a cúpula do G7, o então presidente dos Estados Unidos, Donald Trump, fez uma declaração contundente sobre o Brasil. Ele afirmou que existem planos para prender Bolsonaro Jr. no país. A informação foi divulgada pela BBC.',
        imagem: 'https://images.pexels.com/photos/30256874/pexels-photo-30256874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '13h atrás'
    },
    {
        id: 57, categoria: 'brasil',
        titulo: 'Dalcolmo Revela Maior Desafio da Saúde Pública Brasileira Atual',
        resumo: 'A renomada pneumologista Margareth Dalcolmo apresentou sua visão sobre o principal obstáculo enfrentado pela saúde pública no Brasil atualmente. As declarações da especialista destacam a urgência da questão para o cenário nacional.',
        imagem: 'https://images.pexels.com/photos/14357175/pexels-photo-14357175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '18h atrás'
    },
    {
        id: 58, categoria: 'brasil',
        titulo: 'Acordo EUA-Irã derruba preço do petróleo e gera alerta econômico para o Brasil',
        resumo: 'Um recente acordo entre Estados Unidos e Irã provocou uma queda acentuada nos preços internacionais do petróleo. Essa movimentação no mercado global, por sua vez, sinaliza um risco potencial para a economia brasileira.',
        imagem: 'https://images.pexels.com/photos/14357175/pexels-photo-14357175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '12h atrás'
    },
    {
        id: 59, categoria: 'economia',
        titulo: 'Praia Grande: Maior investimento em saneamento básico per capita do país',
        resumo: 'Praia Grande se destaca nacionalmente ao registrar o maior investimento em saneamento básico por habitante no país. A cidade da Baixada Santista demonstra um forte compromisso com a melhoria da infraestrutura e qualidade de vida de seus moradores.',
        imagem: 'https://images.pexels.com/photos/10531120/pexels-photo-10531120.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '1d atrás'
    },
    {
        id: 60, categoria: 'esportes',
        titulo: 'Brasil encara Marrocos hoje (13) na estreia para a Copa 2026: veja onde assistir',
        resumo: 'Nesta quarta-feira, 13 de março, a Seleção Brasileira inicia sua jornada rumo à Copa do Mundo de 2026 com um confronto contra Marrocos. O GMAX Notícias traz todos os detalhes sobre o horário, local da partida e as plataformas para acompanhar a transmissão ao vivo.',
        imagem: 'https://images.pexels.com/photos/35142168/pexels-photo-35142168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '5d atrás'
    },
    {
        id: 61, categoria: 'eventos',
        titulo: 'Diário Oficial de SP: Concurso Público é aberto com Edital RH nº 021/2026',
        resumo: 'O Estado de São Paulo anunciou a abertura de um novo Concurso Público. O Edital RH nº 021/2026, com todos os detalhes e requisitos, foi oficialmente divulgado no Diário Oficial do Estado. Candidatos interessados devem ficar atentos às próximas etapas.',
        imagem: 'https://images.pexels.com/photos/30354454/pexels-photo-30354454.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '1d atrás'
    },
    {
        id: 62, categoria: 'brasil',
        titulo: 'Adolfo Lutz: R$ 450 milhões previstos para nova sede em três anos',
        resumo: 'A diretoria do Instituto Adolfo Lutz, referência nacional em vigilância epidemiológica, estima que a polêmica mudança de sua sede pode custar R$ 450 milhões. O valor projetado seria desembolsado ao longo de três anos.',
        imagem: 'https://i.metroimg.com/ZLkkWNmNXi2GHnOBa61zvRLayFekJFS9sxFQlBL5jEs/rs:fill:1200:800:1/g:no/q:85/f:webp/plain/https://images.metroimg.com/2026/05/adolfo-lutz.jpg',
        autor: 'Metrópoles', tempo: '1d atrás'
    },
    {
        id: 63, categoria: 'cidade',
        titulo: 'Dia de Sorte 1226: Ninguém acerta as dezenas; prêmio acumula para R$ 1 milhão',
        resumo: 'O concurso 1226 do Dia de Sorte não teve acertadores na faixa principal. Com isso, o prêmio máximo acumulou e o próximo sorteio, a ser realizado na quinta-feira, terá um montante de R$ 1 milhão.',
        imagem: 'https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2026/06/17/797463548-oportunidade-2025-12-11t190923106.jpg',
        autor: 'Portal de Prefeitura', tempo: '1d atrás'
    },
    {
        id: 64, categoria: 'politica',
        titulo: 'Sabesp retira pesquisa sobre \'lulistas\' do ar após denúncia eleitoral de deputado',
        resumo: 'A Sabesp retirou de suas redes sociais uma pesquisa que mencionava o termo \'lulistas\'. A medida foi tomada após o deputado Rui Falcão acionar a Procuradoria Regional Eleitoral de São Paulo contra o questionário, alegando possível irregularidade eleitoral.',
        imagem: 'https://www.diariodocentrodomundo.com.br/wp-content/uploads/2026/05/20240723160724_a1204244-2aeb-4a1d-9f9f-f2bcfaa64da3-960x540-1.webp',
        autor: 'Diario do Centro do Mundo', tempo: '1d atrás'
    },
    {
        id: 65, categoria: 'cidade',
        titulo: 'Cachorro Robô Inova Segurança em Obras de Saneamento na Capital Paulista',
        resumo: 'As obras de saneamento na cidade de São Paulo estão recebendo um reforço tecnológico. Um cachorro robô foi incorporado para aumentar a segurança nas operações. A iniciativa visa otimizar a proteção dos trabalhadores em campo.',
        imagem: 'https://images.pexels.com/photos/7714859/pexels-photo-7714859.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '1d atrás'
    },
];

const videos = [
    {
        id: 1, titulo: '[AO VIVO] BORA BRASIL - 18/06/2026',
        thumb: 'https://img.youtube.com/vi/qP_U4m1ppq0/hqdefault.jpg', duracao: '1:30:00',
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
        id: 5, titulo: 'JORNAL DA MANHÃ - 2ª EDIÇÃO - 18/06/2026',
        thumb: 'https://img.youtube.com/vi/KslnTvqiHCQ/hqdefault.jpg', duracao: '08:00',
        videoId: 'KslnTvqiHCQ', embedUrl: 'https://www.youtube.com/embed/KslnTvqiHCQ'
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
    'URGENTE: Câmara de SP aprova reajuste salarial para a GCM! Impacto direto na segurança e nos servidores municipais.',
    'AGORA: Câmara de SP cria Frente Parlamentar para a EJA! Iniciativa visa fortalecer a Educação de Jovens e Adultos.',
    'ÚLTIMA HORA: Debates sobre Capoeira e Antirracismo avançam na Câmara de SP! Novas pautas sociais em discussão.',
];

const cotacoes = [
    { nome: 'Dólar', icone: 'attach_money', valor: 'R$ 5.11', variacao: '-0.3%', direcao: 'down' },
    { nome: 'Euro', icone: 'euro', valor: 'R$ 5.84', variacao: '-0.7%', direcao: 'down' },
    { nome: 'Ibovespa', icone: 'show_chart', valor: '168.454', variacao: '-0.7%', direcao: 'down' },
    { nome: 'Soja (sc)', icone: 'eco', valor: 'R$ 128.29', variacao: '+0.6%', direcao: 'up' },
    { nome: 'Milho (sc)', icone: 'grass', valor: 'R$ 50.37', variacao: '-0.8%', direcao: 'down' },
    { nome: 'Café (sc)', icone: 'coffee', valor: 'R$ 1844', variacao: '-1.8%', direcao: 'down' },
    { nome: 'Algodão (@)', icone: 'agriculture', valor: 'R$ 133.59', variacao: '+2.8%', direcao: 'up' },
    { nome: 'Trigo (sc)', icone: 'bakery_dining', valor: 'R$ 70', variacao: '+0.8%', direcao: 'up' },
    { nome: 'Ouro (g)', icone: 'diamond', valor: 'R$ 699.61', variacao: '-2.3%', direcao: 'down' },
    { nome: 'Petrobras', icone: 'oil_barrel', valor: 'R$ 38.57', variacao: '+0.1%', direcao: 'up' },
    { nome: 'Vale', icone: 'landscape', valor: 'R$ 79.78', variacao: '-2.0%', direcao: 'down' },
    { nome: 'Itaú', icone: 'account_balance', valor: 'R$ 40.80', variacao: '+0.9%', direcao: 'up' },
    { nome: 'Bradesco', icone: 'account_balance', valor: 'R$ 17.55', variacao: '-0.6%', direcao: 'down' },
    { nome: 'Banco do Brasil', icone: 'account_balance', valor: 'R$ 19.41', variacao: '+0.1%', direcao: 'up' },
    { nome: 'S&P 500', icone: 'public', valor: '7420', variacao: '-1.2%', direcao: 'down' },
    { nome: 'Dow Jones', icone: 'public', valor: '51.493', variacao: '-1.0%', direcao: 'down' },
    { nome: 'Boi Gordo (@)', icone: 'pets', valor: 'R$ --', variacao: '0.0%', direcao: 'up' },
    { nome: 'Arroz (sc)', icone: 'rice_bowl', valor: 'R$ 80.61', variacao: '+0.0%', direcao: 'up' },
    { nome: 'Bitcoin', icone: 'currency_bitcoin', valor: 'R$ 328.348', variacao: '-0.7%', direcao: 'down' },
];

const clima = {
    cidade: 'São Paulo', estado: 'SP',
    temperatura: 14, temp_min: 13, temp_max: 14,
    umidade: 80, condicao: 'Nublado',
    icone: 'cloud', vento: 3.2
};

const trending = [
    '#GMAXNoticias',
    '#SãoPaulo',
    '#CâmaraSPemPauta',
    '#TransparênciaSP',
    '#PautasSociaisSP',
    '#ReajusteGCM',
];
