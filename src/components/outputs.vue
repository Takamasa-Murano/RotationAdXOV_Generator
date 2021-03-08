<template>
  <div id="output">
    
    <div>ゾーンタイプ
      <textarea id="zonetypeOutput" size="30" v-model="zoneType" readonly></textarea><br>
    </div>
    <div>ゾーン編集画面追記コード
      <p>
        Prepend：<br><textarea type="text" id="prependText" class="outputText" v-model="prepend" readonly></textarea>
      </p>
      <p>
        Append：<br><textarea type="text" id="appendText" class="outputText" v-model="append" readonly></textarea>
      </p>
    </div>
    
    <div>
      <p v-show="deliveryViaGAM!=='GAM経由配信'">
        ページ貼り付けタグ：<br><textarea type="text" id="pageTag" class="outputText" v-model="creativeTag" readonly></textarea>
      </p>
      <p v-show="deliveryViaGAM==='GAM経由配信'">
        GAMクリエイティブ欄追記コード<textarea type="text" id="GAMCreativeText" class="outputText" v-model="creativeTag" readonly></textarea>
      </p>
    </div>
    
    <div v-show="deliveryViaGAM==='GAM経由配信'">完成GAMタグ
      <p>
        headタグ：<br><textarea type="text" id="headCompletedGAM" class="outputText" v-model="GAMheadTag" readonly></textarea>
      </p>
      <p>
        bodyタグ：<br><textarea type="text" id="bodyCompletedGAM" class="outputText" v-model="GAMbodyTag" readonly></textarea>
      </p>
    </div>
  </div>
</div>
</template>

<script type="text/javascript" src="./App.js"></script>

<style type="text/css" src="./App.css"></style>
