/* GMAX NOTÍCIAS — Dados de Exemplo */
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
    { id: 1, categoria: 'cidade', destaque: true, titulo: 'Metrô de São Paulo inaugura três novas estações da Linha 6-Laranja', resumo: 'Expansão vai beneficiar mais de 300 mil passageiros por dia na zona norte da capital. Obras custaram R$ 2,1 bilhões.', imagem: 'https://picsum.photos/seed/sp1/800/500', autor: 'Prefeitura SP', tempo: '1h atrás' },
    { id: 2, categoria: 'economia', destaque: true, titulo: 'B3 atinge recorde histórico: Ibovespa ultrapassa 140 mil pontos', resumo: 'Bolsa brasileira tem o melhor desempenho do ano impulsionada por commodities e fluxo estrangeiro.', imagem: 'https://picsum.photos/seed/sp2/800/500', autor: 'InfoMoney', tempo: '2h atrás' },
    { id: 3, categoria: 'politica', destaque: true, titulo: 'Governador de SP anuncia pacote de segurança com R$ 500 milhões', resumo: 'Investimento inclui novas bases da PM, câmeras inteligentes e contratação de 5 mil policiais.', imagem: 'https://picsum.photos/seed/sp3/800/500', autor: 'Governo SP', tempo: '3h atrás' },
    { id: 4, categoria: 'esportes', destaque: true, titulo: 'Corinthians vence clássico e assume liderança do Brasileirão', resumo: 'Timão bateu o rival por 2x0 na Neo Química Arena lotada com mais de 45 mil torcedores.', imagem: 'https://picsum.photos/seed/sp4/800/500', autor: 'GE', tempo: '4h atrás' },
    { id: 5, categoria: 'cidade', destaque: true, titulo: 'Rodízio de veículos em SP terá mudanças a partir de agosto', resumo: 'Nova regra amplia o horário de restrição e inclui motos pela primeira vez no sistema.', imagem: 'https://picsum.photos/seed/sp5/800/500', autor: 'CET-SP', tempo: '5h atrás' },
    { id: 6, categoria: 'brasil', titulo: 'Governo federal anuncia novo marco regulatório para startups', resumo: 'Projeto simplifica abertura de empresas de tecnologia e cria incentivos fiscais para inovação.', imagem: 'https://picsum.photos/seed/sp6/800/500', autor: 'Agência Brasil', tempo: '6h atrás' },
    { id: 7, categoria: 'economia', titulo: 'FIESP prevê crescimento de 3,2% da indústria paulista em 2026', resumo: 'Setor automotivo e tecnológico puxam a retomada, com geração de 80 mil novos empregos.', imagem: 'https://picsum.photos/seed/sp7/800/500', autor: 'FIESP', tempo: '7h atrás' },
    { id: 8, categoria: 'politica', titulo: 'Câmara de SP aprova projeto de revitalização do centro histórico', resumo: 'Plano prevê habitação popular, restauração de prédios e novo polo gastronômico na região da Luz.', imagem: 'https://picsum.photos/seed/sp8/800/500', autor: 'Câmara SP', tempo: '8h atrás' },
    { id: 9, categoria: 'internacional', titulo: 'União Europeia fecha acordo comercial com Mercosul após 25 anos', resumo: 'Tratado reduz tarifas para exportações brasileiras de carne, soja e café para o bloco europeu.', imagem: 'https://picsum.photos/seed/sp9/800/500', autor: 'Reuters', tempo: '9h atrás' },
    { id: 10, categoria: 'eventos', titulo: 'Festival Lollapalooza 2026 anuncia line-up com headliners internacionais', resumo: 'Evento no Autódromo de Interlagos terá três dias de shows e espera público de 200 mil pessoas.', imagem: 'https://picsum.photos/seed/sp10/800/500', autor: 'Cultura SP', tempo: '10h atrás' },
    { id: 11, categoria: 'cidade', titulo: 'São Paulo ganha 50 km de novas ciclovias em projeto de mobilidade', resumo: 'Rede cicloviária da capital paulista chegará a 700 km, conectando todas as zonas da cidade.', imagem: 'https://picsum.photos/seed/sp11/800/500', autor: 'Prefeitura SP', tempo: '11h atrás' },
    { id: 12, categoria: 'esportes', titulo: 'GP de Interlagos confirmado no calendário da F1 até 2030', resumo: 'Autódromo José Carlos Pace renova contrato e receberá investimentos de R$ 200 milhões.', imagem: 'https://picsum.photos/seed/sp12/800/500', autor: 'F1', tempo: '12h atrás' },
    { id: 13, categoria: 'economia', titulo: 'Aluguel em SP sobe 12% no primeiro semestre e bate recorde', resumo: 'Valor médio do m² na capital chega a R$ 58. Bairros como Vila Olímpia e Pinheiros lideram.', imagem: 'https://picsum.photos/seed/sp13/800/500', autor: 'Valor', tempo: '1d atrás' },
    { id: 14, categoria: 'brasil', titulo: 'Inflação desacelera para 0,28% em maio, abaixo do esperado', resumo: 'IPCA acumula 4,1% em 12 meses. Analistas projetam corte na Selic na próxima reunião.', imagem: 'https://picsum.photos/seed/sp14/800/500', autor: 'IBGE', tempo: '1d atrás' },
    { id: 15, categoria: 'politica', titulo: 'ALESP vota projeto que cria programa de habitação para jovens', resumo: 'Iniciativa oferece subsídio de até R$ 80 mil para compra do primeiro imóvel em SP.', imagem: 'https://picsum.photos/seed/sp15/800/500', autor: 'ALESP', tempo: '1d atrás' },
    { id: 16, categoria: 'esportes', titulo: 'Palmeiras anuncia contratação de atacante europeu para 2026', resumo: 'Alviverde fecha com jogador que disputou a Champions League por valor recorde no futebol brasileiro.', imagem: 'https://picsum.photos/seed/sp16/800/500', autor: 'GE', tempo: '2d atrás' },
];

const videos = [
    { id: 1, titulo: 'São Paulo vista do alto: drone sobrevoando a Paulista', thumb: 'https://picsum.photos/seed/vid1sp/600/340', duracao: '06:30', videoId: 'dQw4w9WgXcQ', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 2, titulo: 'Bastidores do Metrô: como funciona a operação 24h', thumb: 'https://picsum.photos/seed/vid2sp/600/340', duracao: '12:00', videoId: 'dQw4w9WgXcQ', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 3, titulo: 'Gastronomia paulistana: os melhores restaurantes de 2026', thumb: 'https://picsum.photos/seed/vid3sp/600/340', duracao: '15:00', videoId: 'dQw4w9WgXcQ', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 4, titulo: 'Interlagos: a história do circuito mais famoso do Brasil', thumb: 'https://picsum.photos/seed/vid4sp/600/340', duracao: '10:00', videoId: 'dQw4w9WgXcQ', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
];



const breakingNews = [
    'URGENTE: Metrô de SP inaugura três novas estações da Linha 6-Laranja na zona norte',
    'AGORA: Ibovespa bate recorde histórico e ultrapassa 140 mil pontos na B3',
    'ÚLTIMA HORA: Governador anuncia pacote de segurança de R$ 500 milhões para o estado',
];

const cotacoes = [
    { nome: 'Dólar', icone: 'attach_money', valor: 'R$ 5,42', variacao: '-0.2%', direcao: 'down' },
    { nome: 'Euro', icone: 'euro', valor: 'R$ 5,88', variacao: '+0.1%', direcao: 'up' },
    { nome: 'Ibovespa', icone: 'show_chart', valor: '140.250', variacao: '+1.4%', direcao: 'up' },
    { nome: 'Petrobras', icone: 'oil_barrel', valor: 'R$ 38,50', variacao: '+2.1%', direcao: 'up' },
    { nome: 'Bitcoin', icone: 'currency_bitcoin', valor: 'R$ 525.000', variacao: '+3.2%', direcao: 'up' },
    { nome: 'S&P 500', icone: 'public', valor: '5.420', variacao: '+0.5%', direcao: 'up' },
];

const clima = {
    cidade: 'São Paulo', estado: 'SP',
    temperatura: 22, temp_min: 16, temp_max: 27,
    umidade: 68, condicao: 'Parcialmente Nublado',
    icone: 'partly_cloudy_day', vento: 12.0,
};

const trending = ['#GMAXNoticias', '#SãoPaulo', '#Ibovespa', '#MetrôSP', '#Corinthians', '#SegurançaSP'];
