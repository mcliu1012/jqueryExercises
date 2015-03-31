<%@ page contentType='text/html;charset=UTF-8' pageEncoding='UTF-8'%>
<script src="/mcliu/resources/js/header.js"></script>
<div>
  <div id="pHeaderImgDiv" class="inlineBlock">
    <img id="pHeaderImg" src="/mcliu/resources/img/logo.png" />
  </div>
  <p id="pHeaderShowHideP" class="inlineBlock verticalAlignBottom cursorPointer btn-default"><span class="icon-reorder icon-2x"></span></p>
  <div id="pHeaderMsgDiv" class="inlineBlock">MCLIU Personal Website</div>
  <div id="pHeaderLogoutDiv" class="inlineblock">
    <a class="btn logoutA btn-primary" href="<c:url value='/logout' />"><span class="icon-reply"></span> 退出</a>
  </div>
</div>