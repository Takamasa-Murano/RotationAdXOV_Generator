<template>
  <div id="app">
    <h2>ローテーションOV設定用コードジェネレータ</h2>
    <div id="description">
      <a href="https://geniee.atlassian.net/wiki/spaces/jigyoukaihatuhonnbu/pages/2025128513/GAM" target="_brank">Confluence記事</a><br>
      <a href="https://docs.google.com/spreadsheets/d/1dtinTjfSJJG99Ylf5Ff3e1MJrciTAqiDI24-t2mTmFc/edit#gid=1267581514" target="_blank">参考スプレッドシート</a><br>
      <a href="https://geniee.slack.com/archives/CL95KHPGX/p1609831584007800" target="_blank">参考Slackスレッド</a><br>
      <span>Aladdinから直接、もしくはGAM経由で配信され、中身の広告が任意の秒数・任意の回数（無限回も可）だけ入れ替わるオーバーレイ広告フォーマットにおいて、任意の設定で実装したい際の、ゾーン編集画面のPrepend/AppendやGAMのクリエイティブ設定で使用するコード、及びページに貼り付けてもらうタグを生成するためのジェネレータ</span>
    </div>
    <myinputs></myinputs>
  </div>
</template>

<script>
import myinputs from "./components/inputs"
export default {
  components: {
    myinputs
  },
  data () {
    return {
      msg: "Hello World!"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#description {
 text-align: left;
 margin-bottom: 25px;
}
</style>
