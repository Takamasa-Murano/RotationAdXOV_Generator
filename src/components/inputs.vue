<template>
<div id="generatorEntity">
  <div id="input">
    <p>ゾーンタイプ：
      <select id="zone_type" v-model="zoneType" @change="inputPreApp">
        <option name="type_sp_ov" selected="selected">SPオーバーレイ</option>
        <option name="type_st_bn">スタンダードバナー</option>
      </select>
    </p><br>
    
    <p>配信形態：
      <select id="delivery_type" v-model="deliveryViaGAM">
        <option id="delivery_aladdin_only" selected="selected">Aladdinタグ直貼り</option>
        <option id="delivery_use_gam">GAM経由配信</option>
      </select>
    </p><br>
    
    <p>ZID：
      <input type="number" id="zoneId" size="10" maxlength="20" v-model="zoneId" @change="inputAll"><br>
    </p>
    <p>Aladdinタグ：
      <input type="text" id="aladdinTag" size="80" v-model="aladdinTag" @change="inputAll"><br>
    </p>
    <p>高さ：
      <input type="number" id="OVHeight" size="10" v-model="height" @change="inputPreApp">px<br>
    </p><br>
    
    <p>リフレッシュ周期：
      <input type="number" id="rotationPeriod" size="10" maxlength="20" v-model="rotateStatus.period" @change="inputPageGAMTag"><br>
    </p>
    <p>リフレッシュ回数：
      <input type="number" id="rotationCount" size="10" v-model="rotateStatus.count" @change="inputPageGAMTag"><br>
    </p>
    <p>
      リフレッシュ時の挙動をホイールインにする <input type="checkbox" id="isWheelIn" v-model="rotateStatus.isWheelIn" @change="inputPageGAMTag">
    </p>
    <p v-show="zoneType==='SPオーバーレイ'">
      iPhoneX以降の機種でオーバーレイ下に空白をつける <input type="checkbox" id="isBottomSpace" v-model="rotateStatus.isRemoveBottomSpace" @change="inputPageGAMTag">
    </p>
    <p>
      ページ最下部で上部固定にする <input type="checkbox" id="isUpshift" v-model="rotateStatus.isUpshift" @change="inputPageGAMTag">
    </p>
    <p>アイコンサイズの域値：
      <input type="number" id="iconSize" size="10" value="30" v-model="rotateStatus.iconSize" @change="inputPageGAMTag">px
    </p><br>
    
    <div @change="inputAppend">
      PRバー設定（Aladdin配信時のみ）<br>
      <p>
        PRバーをつける <input type="checkbox" id="isPRbar" v-model="PRchecked">
      </p>
      <div v-show="PRchecked">
      <p>
        PRバー背景色：<input type="color" id="prBackground" value="#FFFFFF" v-model="prBarStatus.prBackground">
      </p>
      <p>
        PRテキスト縦幅：<input type="number" id="prTextHeight" size="10" maxlength="20" value="20" v-model="prBarStatus.prTextHeight">px
      </p>
      <p>
        PRテキストカラー：<input type="color" id="prTextColor" value="#000000" v-model="prBarStatus.prTextColor">
      </p>
      <p>
        PRテキストサイズ：<input type="number" id="prTextSize" size="10" value="15" v-model="prBarStatus.prTextSize">px
      </p>
      <p>
        PRテキスト：<input type="text" id="prText" size="10" maxlength="20" value="[PR]" v-model="prBarStatus.prText">
      </p>
      </div>
    </div><br>

    <p @change="inputAll">横幅拡大：
      <select id="isExtend" v-model="isExtendIn">
        <option name="no_extend" selected="selected">拡大しない</option>
        <option name="aladdin_extend">Aladdin配信時のみ</option>
        <option name="extend">Aladdin配信時・AdX配信時ともに</option>
      </select>
    </p><br>
    <p @change="inputAll">Xボタン設定：
      Xボタンをつける
      <select id="isCloseButton" v-model="closeButtonAdd">
        <option name="no_close_button" selected="selected">不要</option>
        <option name="aladdin_close_button">Aladdin配信時のみ</option>
        <option name="close_button">Aladdin配信時・AdX配信時ともに</option>
      </select><br>
      <span v-show="closeButtonAdd!=='不要'">Xボタンの設定
        <p>
          Xボタンサイズ：<input type="number" id="closeButtonSize" size="10" v-model="closeButtonStatus.closeButtonSize">px
        </p>
        <select id="isCloseButton" v-model="closeButtonStatus.closeButtonPos">Xボタンの配置
          <option name="close_button_right">左</option>
          <option name="close_button_center">中央</option>
          <option name="close_button_left" selected="selected">右</option>
        </select><br>
        <input type="checkbox" id="closeButtonImageChange" v-model="isCloseButtonImageChange">画像を変更する
        <div id="closeButtonImage" v-show="isCloseButtonImageChange">
           画像のURL：<input type="url" id="closeButtonImageUrl" v-model="closeButtonStatus.closeButtonUrl"><br>
           <span style="font-size:10px;">プレビュー →</span>
           <img v-bind:src="closeButtonStatus.closeButtonUrl" v-bind:key="closeButtonStatus.closeButtonUrl" id="closeButtonImageElm" alt="画像URL無効"><br>
        </div>
      </span>
    </p><br>
    
    <div v-show="deliveryViaGAM==='GAM経由配信'" @change="processingGAMTag">加工前GAMタグ
      <p>
        headタグ：<textarea type="text" id="headNormalGAM" class="GAMinput" v-model="normalGAMheadTag"></textarea>
      </p>
      <p>
        bodyタグ：<textarea type="text" id="bodyNormalGAM" class="GAMinput" v-model="normalGAMbodyTag"></textarea>
      </p>
    </div>
    
  </div>
  
  <span id="toIcon">→</span>
  
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