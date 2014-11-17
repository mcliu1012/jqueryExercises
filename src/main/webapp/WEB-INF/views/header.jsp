<%@ page contentType='text/html;charset=UTF-8' pageEncoding='UTF-8'%>
<script src="${baseUrl}/js/header.js"></script>
<div>
  <div id="pHeaderImgDiv" class="inlineBlock">
    <img id="pHeaderImg" src="${baseUrl}/img/monoliths_logo_footer.png" />
  </div>
  <div id="pHeaderMsgDiv" class="inlineBlock">Test</div>
  <div id="pHeaderLogoutDiv" class="inlineblock">
    <a class="btn logoutA" href="<c:url value='/logout' />">返回到Login页面</a>
  </div>
</div>