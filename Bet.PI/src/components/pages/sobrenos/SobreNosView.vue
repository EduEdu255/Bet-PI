<script setup lang="ts">
</script>

<template>
  <div class="view">
    <!-- Primeira Seção: Quem somos -->
    <section class="section-container bg-sobrenos-b d-flex justify-content-center align-items-center">
      <div class="container row">
        <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start">
          <h2 class="text-white">Quem somos?</h2>
          <p class="paragrafo-type-b">
            A bet.pi é uma plataforma de apostas online criada para oferecer uma experiência segura, emocionante e inovadora aos nossos usuários. Combinamos tecnologia de ponta e uma equipe dedicada para garantir que cada aposta seja justa e transparente, além de proporcionar entretenimento de alta qualidade.
          </p>
        </div>
        <div class="col-12 col-md-6 d-flex justify-content-center">
          <div class="image-container">
            <img src="../../../assets/images/lider-do-time.png" />
          </div>
        </div>
      </div>
    </section>

    <!-- Segunda Seção: Segurança e Confiabilidade -->
    <section class="section-container bg-sobrenos-b d-flex justify-content-center align-items-center">
      <div class="container row">
        <div class="col-12 col-md-6 d-flex justify-content-center">
          <div class="image-container">
            <img src="../../../assets/images/seguranca.png" />
            
          </div>
        </div>
        <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start">
          <h2 class="text-white">Segurança e Confiabilidade</h2>
          <p class="paragrafo-type-b">
            Na bet.pi, a segurança é nossa prioridade. Utilizamos criptografia de ponta, além de sistemas de monitoramento contínuo para proteger seus dados. Nosso compromisso é com a transparência e a justiça em cada aposta, proporcionando um ambiente seguro para nossos usuários.
          </p>
        </div>
      </div>
    </section>

    <!-- Terceira Seção: Suporte ao Cliente -->
    <section class="section-container bg-sobrenos-b d-flex justify-content-center align-items-center">
      <div class="container row">
        <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start">
          <h2 class="text-white">Suporte ao Cliente</h2>
          <p class="paragrafo-type-b">
            Nossa equipe de suporte está disponível 24/7 para garantir que nossos usuários tenham uma experiência sem preocupações. Se você tiver dúvidas ou problemas, nosso time dedicado de atendimento ao cliente está sempre pronto para ajudar, proporcionando soluções rápidas e eficazes para que você possa focar no que realmente importa: suas apostas.
          </p>
        </div>
        <div class="col-12 col-md-6 d-flex justify-content-center">
          <div class="image-container">
            <img src="../../../assets/images/suporte-tecnico.png" />
          </div>
        </div>
      </div>
    </section>

    <!-- Quarta Seção: Nossa Missão -->
    <section class="section-container bg-sobrenos-b d-flex justify-content-center align-items-center">
      <div class="container row">
        <div class="col-12 col-md-6 d-flex justify-content-center">
          <div class="image-container">
            <img src="../../../assets/images/missao.png" />
          </div>
        </div>
        <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start">
          <h2 class="text-white">Nossa Missão</h2>
          <p class="paragrafo-type-b">
            A missão da bet.pi é criar um ambiente de apostas seguro, divertido e acessível para todos. Estamos comprometidos com a inovação e com a oferta de uma plataforma de fácil acesso, onde nossos usuários possam apostar com confiança e se divertir.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
html, body {
  height: 100%;
  overflow-x: hidden; 
  margin: 0;
  padding: 0;
}

.view {
  width: 100vw;
  background-color: #282828;
  overflow-y: auto;
}

.section-container {
  padding: 30px 0;
  margin: 0;
}

.image-container {
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

h2 {
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px;
}

.paragrafo-type-b {
  font-size: 1.2rem;
  color: #ccc;
  text-align: justify;
}

/* Primeira Seção - Gradiente Base */
.bg-sobrenos-b {
  background: linear-gradient(180deg, #282828, #282828); /* Cor sólida */
  color: #FFF;
}

/* Segunda Seção - Gradiente Suave */
.bg-sobrenos-b-2 {
  background: linear-gradient(180deg, #282828, #3c3c3c); /* Gradiente suave do cinza */
  color: #FFF;
}

/* Terceira Seção - Gradiente de Escuro para Claro */
.bg-sobrenos-b-3 {
  background: linear-gradient(180deg, #282828, #4d4d4d); /* Gradiente suave de escuro para um cinza mais claro */
  color: #FFF;
}

/* Quarta Seção - Gradiente de Escuro para mais Claro */
.bg-sobrenos-b-4 {
  background: linear-gradient(180deg, #282828, #606060); /* Gradiente do escuro para o cinza mais claro */
  color: #FFF;
}

@media (min-width: 768px) {
  .image-container {
    width: 400px;
    height: 400px;
  }
}

@media (min-width: 1200px) {
  .image-container {
    width: 500px;
    height: 500px;
  }
}
</style>
