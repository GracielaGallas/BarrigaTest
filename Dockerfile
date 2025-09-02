# Cypress v14 já instalado
FROM cypress/included:14.5.4

WORKDIR /e2e

# 1) Copie só o package.json (NÃO copia o lock aqui)
COPY package.json ./

# 2) Force npm a usar apenas o registro público e ignore configs corporativas
ENV NPM_CONFIG_REGISTRY=https://registry.npmjs.org/
RUN printf 'registry=https://registry.npmjs.org/\n' > /root/.npmrc

# 3) Instale deps a partir do package.json
RUN npm install --no-audit --no-fund --userconfig=/root/.npmrc

# 4) Agora copie o restante do projeto (inclusive o lock, se existir; não será usado)
COPY . .

# BaseUrl padrão (pode sobrescrever com -e CYPRESS_baseUrl=...)
ENV CYPRESS_baseUrl="https://barrigarest.wcaquino.me"

ENTRYPOINT ["npx", "cypress"]
CMD ["run"]
