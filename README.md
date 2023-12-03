<h1>Olá!! Bem-vindo ao Meu Blog</h1>

<p>Este repositório contém o código utilizado para desenvolvedor meu blog pessoal, e a seguir irei explicar as ferramentas utilizada no processo de desenvolvimento</p>

<h2>🛠️ Construido com</h2>

<ul>
    <li>Nextjs</li>
    <li>React</li>
    <li>Styled Components</li>
    <li>Strapi</li>
    <li>Postgres</li>
    <li>Pm2</li>
    <li>Nginx</li>
</ul>

<h2>📦 Explicando o uso de cada ferramenta</h2>

<p align="justify">O front-end consome uma api-rest e foi desenvolvido utilizando o framework <a href="https://strapi.io/"> NextJS</a> que utiliza a biblioteca do React os estilos optei por utilizar o Styled Component. Afim de manter uma orginzação e padrão do projeto utilizo o eslit e o prettier.</p>

<p align="justify">O back-end foi desenvolvido utilizado o <a href="https://nextjs.org/"> Strapi</a> para gerar uma api-rest, utilizo o postgres como bando de dados e uma maquina virtual disponibilizada pela aws roda um servidor linux que utilizo o Pm2 para gerenciar o inicio da aplicação sempre que servidor ligar ou reinicipar e o Nginx para fazer o proxy reverso além do let's encrypt para gerar o certificado ssl.</p>
