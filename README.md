
# Teste Híbrido - Lidiane ( Magento 2 )
26/5/2025

## Instalação do ambiente

### Arquivos e Repositório
Link do repositório no Github: [LidianeAlencar/magento2-teste](https://github.com/LidianeAlencar/magento2-teste)

Arquivos pub/media e dump: [Google Drive - Teste Hibrido](https://drive.google.com/drive/folders/1xF_7e1qr7VPn4SMBoz1XRW9Fentm9MgY?usp=sharing)

#


#### Caso esteja utilizando o warden, o .env está projeto.

```bash
warden svc up
warden env up
```

depois só precisa importar o dump do banco.

Documentação do warden: https://docs.warden.dev/installing.html

#

### Estrutura do projeto

1. Criei um novo tema dentro do magento: app/design/frontend/Hibrido/lidiane
2. Estrutura básica dentro do LESS, utilizando os padrões do magento.
3. Todos os textos estão utilizando i18n
4. Logos, paleta de cores, banner, foram criados do zero (reaproveitei apenas as imagens de produtos)

#

### Estrutura da Home

1. Utilizei a página original do magento (cms)
2. PageBuilder: utilizei apenas a vitrine de produtos e auxilio para chamar os blocos criados a parte
3. Como o foco é o html, dentro de cada bloco (Categorias, banner principal e como funciona ) chamei de forma simples o phtml: {{block class="Magento\Framework\View\Element\Template" template="Magento_Theme::home/home-how-it-works.phtml"}}




## Testes
Criei 3 vídeos simples, sem audio, mostrando as seguintes informações:

1. [Loja pronta](https://drive.google.com/file/d/106YRugU2c8fIOjORjclJsEWPBUpPb5T8/view?usp=drive_link)
2. [Estrutura Admin](https://drive.google.com/file/d/1JPfw8jhsdGpYdBqyxOVUSyenRGLxL0uI/view?usp=drive_link)
3. [Estrutura Código](https://drive.google.com/file/d/19roWURlZvYtSWFR-fmeQ4rl-pvKh_KHY/view?usp=drive_link)





#
#
#Dúvidas, Críticas e Sugestões

estou por aqui: (11)97701-6397 | alencar.lidiane@gmail.com




# magento-teste
