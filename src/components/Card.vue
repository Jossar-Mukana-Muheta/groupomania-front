<template>
  <div class="tweet">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image">
              <img :src="tweet.img">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p><strong>{{tweet.name}}</strong> <small>{{tweet.handle}}</small></p>
              <p>{{tweet.tweet}}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
</template>

<script>
export default {
  name: "Card",
data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
    props: {
    tweet: Object
  }
}
</script>

<style lang="scss">
strong {
  font-weight: 800;
}
p {
  line-height: 1.2;
  + p {
    margin-top: 5px;
  }
}

.tweet {
  background-color: #fff;
  color: #373737;
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  padding: 30px;
  + .tweet {
    margin-top: 20px;
  }
  .media {
    display: flex;
  }
  img {
    width: 64px;
    margin-right: 15px;
  }
  small {
    font-size: 14px;
    color: #657786;
  }
}
</style>