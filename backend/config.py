"""
GMAX NOTÍCIAS — Configuração Central do Backend
Portal de notícias de São Paulo e região metropolitana
"""

import os
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), '.env'))

# === CHAVES DE API ===
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY', '')
NEWSAPI_KEY = os.getenv('NEWSAPI_KEY', '')
PEXELS_API_KEY = os.getenv('PEXELS_API_KEY', '')
OPENWEATHERMAP_KEY = os.getenv('OPENWEATHERMAP_KEY', '')

# === MODELO IA ===
GEMINI_MODEL = 'gemini-2.5-flash'

# === CIDADE ===
CIDADE = 'São Paulo'
ESTADO = 'SP'

# === FONTES LOCAIS (PRIORIDADE) ===
FONTES_SP = {
    'prefeitura': {
        'nome': 'Prefeitura de São Paulo',
        'url_lista': 'https://www.capital.sp.gov.br/noticias',
        'url_base': 'https://www.capital.sp.gov.br',
        'prioridade': 100
    },
    'camara': {
        'nome': 'Câmara Municipal de São Paulo',
        'url_lista': 'https://www.saopaulo.sp.leg.br/blog/',
        'url_base': 'https://www.saopaulo.sp.leg.br',
        'prioridade': 95
    },
    'alesp': {
        'nome': 'Assembleia Legislativa SP',
        'url_lista': 'https://www.al.sp.gov.br/noticia/',
        'url_base': 'https://www.al.sp.gov.br',
        'prioridade': 90
    },
    'governo': {
        'nome': 'Governo do Estado de SP',
        'url_lista': 'https://www.saopaulo.sp.gov.br/noticias/',
        'url_base': 'https://www.saopaulo.sp.gov.br',
        'prioridade': 90
    },
}

# === FONTES RSS NACIONAIS ===
FONTES_RSS = [
    {'nome': 'G1', 'url': 'https://g1.globo.com/rss/g1/', 'categoria_forcada': None},
    {'nome': 'G1 São Paulo', 'url': 'https://g1.globo.com/rss/g1/sao-paulo/', 'categoria_forcada': 'cidade'},
    {'nome': 'UOL Notícias', 'url': 'https://rss.uol.com.br/feed/noticias.xml', 'categoria_forcada': None},
    {'nome': 'Folha de S.Paulo', 'url': 'https://feeds.folha.uol.com.br/emcimadahora/rss091.xml', 'categoria_forcada': None},
    {'nome': 'Jornal Nacional', 'url': 'https://g1.globo.com/rss/g1/jornal-nacional/', 'categoria_forcada': 'brasil'},
    {'nome': 'CNN Brasil', 'url': 'https://www.cnnbrasil.com.br/feed/', 'categoria_forcada': None},
    {'nome': 'CNN International', 'url': 'http://rss.cnn.com/rss/edition.rss', 'categoria_forcada': 'internacional'},
    {'nome': 'Fox News', 'url': 'https://moxie.foxnews.com/google-publisher/latest.xml', 'categoria_forcada': 'internacional'},
    {'nome': 'New York Times World', 'url': 'https://rss.nytimes.com/services/xml/rss/nyt/World.xml', 'categoria_forcada': 'internacional'},
    {'nome': 'G1 Mundo', 'url': 'https://g1.globo.com/rss/g1/mundo/', 'categoria_forcada': 'internacional'},
    {'nome': 'O Antagonista', 'url': 'https://oantagonista.com.br/feed/', 'categoria_forcada': None},
    {'nome': 'Bloomberg', 'url': 'https://feeds.bloomberg.com/markets/news.rss', 'categoria_forcada': 'economia'},
    {'nome': 'GE (Globo Esporte)', 'url': 'https://ge.globo.com/rss/ge/', 'categoria_forcada': 'esportes'},
    {'nome': 'Estadão SP', 'url': 'https://www.estadao.com.br/rss/ultimas-noticias-sao-paulo.xml', 'categoria_forcada': 'cidade'},
    {'nome': 'R7 Notícias', 'url': 'https://noticias.r7.com/feed.xml', 'categoria_forcada': None},
    {'nome': 'Band News', 'url': 'https://www.band.uol.com.br/rss/noticias.xml', 'categoria_forcada': None},
    {'nome': 'Metrópoles', 'url': 'https://www.metropoles.com/feed', 'categoria_forcada': None},
    {'nome': 'Valor Econômico', 'url': 'https://pox.globo.com/rss/valor/', 'categoria_forcada': 'economia'},
    {'nome': 'Agência Brasil Economia', 'url': 'https://agenciabrasil.ebc.com.br/rss/economia/feed.xml', 'categoria_forcada': 'economia'},
    {'nome': 'InfoMoney', 'url': 'https://www.infomoney.com.br/feed/', 'categoria_forcada': 'economia'},
]

# === NEWSAPI ===
NEWSAPI_QUERIES = ['São Paulo', 'governo SP', 'economia Brasil']
NEWSAPI_DOMAINS = 'g1.globo.com,uol.com.br,folha.uol.com.br,estadao.com.br'

# === GOOGLE NEWS (sem API key) ===
GOOGLE_NEWS_QUERIES = ['São+Paulo+SP', 'Estado+São+Paulo', 'Brasil+hoje']

# === CATEGORIAS ===
CATEGORIAS = {
    'politica': {
        'nome': 'Política',
        'cor': '#E63946',
        'icone': 'account_balance',
        'gradient': 'linear-gradient(135deg, #E63946, #D62839)',
        'palavras_chave': ['governo', 'governador', 'prefeito', 'prefeitura', 'câmara', 'vereador',
                           'deputado', 'senador', 'eleição', 'partido', 'lula', 'bolsonaro',
                           'congresso', 'senado', 'stf', 'tarcísio', 'nunes', 'alesp',
                           'assembleia', 'legislativo', 'projeto de lei', 'votação',
                           'ministro', 'ministério', 'reforma', 'político', 'política']
    },
    'economia': {
        'nome': 'Economia',
        'cor': '#2B9348',
        'icone': 'trending_up',
        'gradient': 'linear-gradient(135deg, #2B9348, #55A630)',
        'palavras_chave': ['economia', 'mercado', 'bolsa', 'ibovespa', 'dólar', 'inflação',
                           'pib', 'juros', 'selic', 'investimento', 'emprego', 'desemprego',
                           'fiesp', 'b3', 'banco', 'crédito', 'startup', 'fintech',
                           'exportação', 'importação', 'indústria', 'comércio']
    },
    'cidade': {
        'nome': 'São Paulo',
        'cor': '#457B9D',
        'icone': 'location_city',
        'gradient': 'linear-gradient(135deg, #457B9D, #1D3557)',
        'palavras_chave': ['são paulo', 'paulista', 'paulistano', 'metrô', 'cptm', 'rodízio',
                           'trânsito', 'marginal', 'avenida', 'bairro', 'zona', 'leste',
                           'oeste', 'norte', 'sul', 'centro', 'sé', 'pinheiros', 'morumbi',
                           'guarulhos', 'osasco', 'abc', 'santo andré', 'são bernardo',
                           'são caetano', 'campinas', 'santos', 'sorocaba', 'ribeirão',
                           'obra', 'infraestrutura', 'saneamento', 'moradia', 'transporte']
    },
    'esportes': {
        'nome': 'Esportes',
        'cor': '#FB8500',
        'icone': 'sports_soccer',
        'gradient': 'linear-gradient(135deg, #FB8500, #FFB703)',
        'palavras_chave': ['futebol', 'corinthians', 'palmeiras', 'são paulo fc', 'santos',
                           'brasileirão', 'libertadores', 'copa', 'gol', 'campeonato',
                           'neo química arena', 'allianz parque', 'morumbis', 'vila belmiro',
                           'neymar', 'fórmula 1', 'interlagos', 'gp brasil',
                           'basquete', 'vôlei', 'tênis', 'mma', 'ufc', 'olimpíadas']
    },
    'brasil': {
        'nome': 'Brasil',
        'cor': '#0077B6',
        'icone': 'flag',
        'gradient': 'linear-gradient(135deg, #0077B6, #00B4D8)',
        'palavras_chave': ['brasil', 'brasileiro', 'federal', 'nacional', 'país',
                           'brasília', 'congresso', 'governo federal', 'sus', 'educação',
                           'saúde', 'segurança', 'violência', 'crime', 'polícia',
                           'incêndio', 'acidente', 'tragédia', 'operação']
    },
    'internacional': {
        'nome': 'Mundo',
        'cor': '#6A4C93',
        'icone': 'public',
        'gradient': 'linear-gradient(135deg, #6A4C93, #8B5FBF)',
        'palavras_chave': ['eua', 'estados unidos', 'trump', 'biden', 'china', 'rússia',
                           'ucrânia', 'europa', 'putin', 'guerra', 'israel', 'gaza',
                           'onu', 'otan', 'mundial', 'global', 'internacional',
                           'oriente médio', 'áfrica', 'ásia']
    },
    'eventos': {
        'nome': 'Eventos',
        'cor': '#C1121F',
        'icone': 'event',
        'gradient': 'linear-gradient(135deg, #C1121F, #E5383B)',
        'palavras_chave': ['evento', 'show', 'festival', 'exposição', 'teatro', 'cinema',
                           'museu', 'cultura', 'masp', 'pinacoteca', 'ibirapuera',
                           'virada cultural', 'carnaval', 'réveillon', 'feira', 'congresso',
                           'conferência', 'lançamento', 'inauguração', 'abertura']
    },
}

# === CANAIS YOUTUBE ===
CANAIS_YOUTUBE = [
    {'nome': 'Band Jornalismo', 'channel_id': 'UCMNi2NaFERhTpEpLPAyRRdQ', 'url': 'https://www.youtube.com/@BandJornalismo', 'prioridade': 100},
    {'nome': 'CNN Brasil', 'channel_id': 'UCbBr1ZjjQxTiMonument-KIPA', 'url': 'https://www.youtube.com/@CNNbrasil', 'prioridade': 95},
    {'nome': 'Jovem Pan News', 'channel_id': 'UCzXTml0sPRmwHQkPsPZ4k1Q', 'url': 'https://www.youtube.com/@JovemPanNews', 'prioridade': 90},
    {'nome': 'SBT News', 'channel_id': 'UC-U1fF8sLzwdHSpgnSQR7OA', 'url': 'https://www.youtube.com/@SBTNews', 'prioridade': 85},
    {'nome': 'TV Cultura', 'channel_id': 'UCsarLwPEGUyoJDnnYxQJE1A', 'url': 'https://www.youtube.com/@tvcultura', 'prioridade': 80},
]
QUANTIDADE_VIDEOS = 8

# === COTAÇÕES ===
QUANTIDADE_NOTICIAS = 140

# === CLIMA ===
CIDADE_COORDS = {'lat': -23.5505, 'lon': -46.6333}

# === CAMINHOS ===
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CAMINHO_JS = os.path.normpath(os.path.join(BASE_DIR, '..', 'js', 'news-data.js'))
CAMINHO_LOG = os.path.join(BASE_DIR, 'logs')

# === HORÁRIOS (somente Segunda e Quinta) ===
HORARIOS_ATUALIZACAO = ['08:00']
DIAS_ATUALIZACAO = ['monday', 'thursday']

# === PROMPTS IA ===
PROMPT_REESCRITA = """Você é um editor do portal GMAX NOTÍCIAS (São Paulo).
Reescreva a notícia abaixo com linguagem jornalística profissional em português brasileiro.

REGRAS:
1. Título: máximo 90 caracteres, impactante e informativo
2. Resumo: 2-3 frases, máximo 280 caracteres, objetivo e claro
3. NÃO invente informações
4. NÃO use aspas no título
5. Se a notícia for propaganda/publicidade, retorne {{"rejeitar": true}}

Título original: {titulo}
Texto: {texto}

Responda APENAS em JSON: {{"titulo": "...", "resumo": "..."}}"""

PROMPT_BREAKING = """Analise as notícias mais importantes de São Paulo e gere 3 chamadas de URGENTE.
Cada chamada deve ter no máximo 120 caracteres e começar com URGENTE:, AGORA: ou ÚLTIMA HORA:.

Notícias:
{noticias}

Responda em JSON: {{"breaking": ["URGENTE: ...", "AGORA: ...", "ÚLTIMA HORA: ..."]}}"""

PROMPT_TRENDING = """Com base nas notícias abaixo de São Paulo, gere 6 trending topics (hashtags).
Inclua sempre #GMAXNoticias e #SãoPaulo.

Notícias:
{noticias}

Responda em JSON: {{"trending": ["#GMAXNoticias", "#SãoPaulo", ...]}}"""
