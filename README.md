# 🤖 Bot de Promoções para Telegram

Bot automatizado para monitorar grupos do Telegram em busca de palavras-chave específicas (como promoções, produtos, etc.) e enviar alertas instantâneos para você.

## 📋 Funcionalidades

- ✅ Monitora automaticamente grupos e supergrupos do Telegram
- 🔍 Detecta palavras-chave customizáveis nas mensagens
- 📢 Envia alertas instantâneos para seu chat privado
- 🔗 Inclui link direto para a mensagem (quando o grupo é público)
- 👥 Mostra informações do grupo e remetente
- 🏓 Comando `/ping` para testar se o bot está funcionando

## 🔧 Pré-requisitos

- Node.js (versão 14 ou superior)
- Uma conta no Telegram
- npm ou yarn instalado

## 📦 Instalação

1. Clone este repositório ou baixe os arquivos:
```bash
git clone <seu-repositorio>
cd telegram-promo-bot
```

2. Instale as dependências:
```bash
npm install
```

3. Copie o arquivo de exemplo para criar seu `.env`:
```bash
cp .env.example .env
```

## ⚙️ Configuração

### Passo 1: Criar o Bot

1. Abra o Telegram e procure por `@BotFather`
2. Envie o comando `/newbot`
3. Escolha um nome para o seu bot (ex: "Meu Bot de Promoções")
4. Escolha um username que termine com "bot" (ex: "meu_promo_bot")
5. O BotFather vai te enviar um **token** - copie esse token

### Passo 2: Obter seu ID do Telegram

1. Procure por `@getidsbot` no Telegram
2. Inicie uma conversa com ele (clique em "Start" ou envie qualquer mensagem)
3. O bot vai te enviar seu **ID pessoal** - copie esse número

### Passo 3: Configurar o arquivo .env

Edite o arquivo `.env` e preencha com suas informações:

```env
TELEGRAM_BOT_TOKEN=seu_token_aqui
ALERT_CHAT_ID=seu_id_aqui
KEYWORDS=ssd,fonte,ryzen 7,rtx,promoção
```

**Explicação dos campos:**
- `TELEGRAM_BOT_TOKEN`: Token que você recebeu do @BotFather
- `ALERT_CHAT_ID`: Seu ID pessoal do Telegram (obtido com @getidsbot)
- `KEYWORDS`: Palavras-chave separadas por vírgula (o bot vai procurar por essas palavras nas mensagens dos grupos)

### Passo 4: Desabilitar o Modo de Privacidade

Para que o bot possa ler todas as mensagens dos grupos, você precisa desabilitar o modo de privacidade:

1. Volte ao `@BotFather`
2. Envie o comando `/setprivacy`
3. Selecione seu bot (clique no nome com @ que você registrou)
4. Digite `Disable` ou clique no botão "Disable"

Isso permite que o bot leia todas as mensagens dos grupos, não apenas as que mencionam ele.

## 🚀 Como Usar

### Iniciar o Bot

Execute o bot com:
```bash
npm start
```

Você deve ver uma mensagem como:
```
🤖 Bot de promoções iniciado...
Palavras-chave: ['ssd', 'fonte', 'ryzen 7', 'rtx', 'promoção']
```

### Adicionar o Bot aos Grupos

1. Adicione seu bot aos grupos do Telegram que você quer monitorar
2. Dê permissão de administrador ao bot (ou pelo menos permissão para ler mensagens)
3. Pronto! O bot vai começar a monitorar automaticamente

### Testar o Bot

Para verificar se o bot está funcionando, envie uma mensagem privada para ele:
```
/ping
```

O bot deve responder com "pong 🏓"

## 📨 Formato do Alerta

Quando o bot encontrar uma palavra-chave, você receberá um alerta assim:

```
🔔 Palavra-chave encontrada!
👥 Grupo: Nome do Grupo
👤 De: João Silva
🔎 Bateu em: ssd, promoção

💬 Mensagem:
[Texto completo da mensagem original]
🔗 Link: https://t.me/nomegrupo/123
```

**Observação:** O link direto só aparece se o grupo for público (tem @username).

## 📝 Exemplos de Palavras-chave

No arquivo `.env`, você pode configurar palavras-chave como:

- Para tecnologia: `ssd,ryzen,rtx,gpu,notebook`
- Para promoções: `promoção,desconto,oferta,cupom,black friday`
- Para produtos específicos: `iphone,playstation,xbox,nintendo switch`

**Dica:** As palavras são detectadas em qualquer parte do texto e não são case-sensitive (maiúsculas/minúsculas não importam).

## 🛠️ Estrutura do Projeto

```
telegram-promo-bot/
├── index.js           # Código principal do bot
├── package.json       # Dependências do projeto
├── .env              # Suas configurações (não committar!)
├── .env.example      # Exemplo de configuração
└── README.md         # Este arquivo
```

## ⚠️ Observações Importantes

- Mantenha seu arquivo `.env` seguro e **nunca** compartilhe seu token
- O bot só monitora grupos, não conversas privadas
- Certifique-se de que o bot tem permissões adequadas nos grupos
- O bot precisa estar rodando continuamente para monitorar os grupos

## 🐛 Problemas Comuns

**Bot não responde:**
- Verifique se o token está correto no `.env`
- Certifique-se de que o modo de privacidade está desabilitado
- Confirme que o bot tem permissões no grupo

**Não recebo alertas:**
- Verifique se o `ALERT_CHAT_ID` está correto
- Teste o bot com `/ping` em privado
- Confirme que as palavras-chave estão escritas corretamente

**Bot não vê mensagens do grupo:**
- Verifique se desabilitou o modo de privacidade no @BotFather
- Adicione o bot como administrador do grupo

## 📄 Licença

ISC

---

Feito com ❤️ para não perder nenhuma promoção!

