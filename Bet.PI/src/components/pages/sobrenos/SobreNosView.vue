<script setup lang='ts'>
</script>

<template>
    <div class="view">
        
        

        <section class="bg-alternative-b section-container d-flex justify-content-center align-items-center">
            <div class="container row">
                <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <h2>Quem somos?</h2>
                    <p class="paragrafo-type-b">
                        A bet.pi é uma plataforma de apostas online criada para oferecer uma experiência segura, emocionante e inovadora aos nossos usuários. Combinamos tecnologia de ponta e uma equipe dedicada para garantir que cada aposta seja justa e transparente, além de proporcionar entretenimento de alta qualidade.
                    </p>
                </div>
                <div class="col-12 col-md-6 d-flex justify-content-center">
                    <div class="image-container">
                        <img src="../../../assets/images/pexels-andrea-zanon-125322077-27440685-removebg-preview.png" />
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-secondary-b section-container d-flex justify-content-center align-items-center">
            <div class="container row">
                <div class="col-12 col-md-6 d-flex justify-content-center">
                    <div class="image-container">
                        <img src="../../../assets/images/pexels-andrea-zanon-125322077-27440685-removebg-preview.png" />
                    </div>
                </div>
                <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <h2>Segurança e Confiabilidade</h2>
                    <p class="paragrafo-type-b">
                        A bet.pi é uma plataforma de apostas online criada para oferecer uma experiência segura, emocionante e inovadora aos nossos usuários. Combinamos tecnologia de ponta e uma equipe dedicada para garantir que cada aposta seja justa e transparente, além de proporcionar entretenimento de alta qualidade.
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
    overflow-y: auto; /* Adicione esta linha */
}

.section-container {
    padding: 10px;
}

.image-container {
    width: 300px;
    height: 300px;
    overflow: hidden;
    border-radius: 50%;
    background-color: #FBE219;
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    max-width: 100%;
    height: auto;
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
