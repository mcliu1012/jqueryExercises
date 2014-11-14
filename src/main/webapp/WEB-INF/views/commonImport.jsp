<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix='spring' uri='http://www.springframework.org/tags' %>
<% String sysDate = (new java.text.SimpleDateFormat("yyyyMMdd").format(new java.util.Date())); %>
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
<title>MCLIU</title>
<c:url value="resources/" var="baseUrl" />
<spring:url value='${baseUrl}css/common/common.css' var='commoncss' />
<spring:url value='${baseUrl}css/lib/jquery-ui.css' var='jqueryuicss' />
<spring:url value='${baseUrl}css/lib/bootstrap.css' var='bootstrapcss' />
<spring:url value='${baseUrl}css/lib/bootstrap-responsive.css' var='bootstrapresponsivecss' />
<spring:url value='${baseUrl}css/lib/select2.css' var='select2css' />
<spring:url value='${baseUrl}css/lib/bootstrap-datetimepicker.min.css' var='bootstrapdatepickercss' />
<spring:url value='${baseUrl}css/lib/bootstrap-slider.css' var='bootstrapslidercss' />
<spring:url value='${baseUrl}css/index.css' var='indexcss' />

<spring:url value='${baseUrl}js/lib/jquery-1.11.0.min.js' var='jquery' />
<spring:url value='${baseUrl}js/lib/jquery-migrate-1.2.1.min.js' var='jquerymigrate' />
<spring:url value='${baseUrl}js/lib/jquery-ui.js' var='jqueryui' />
<spring:url value='${baseUrl}js/lib/bootstrap.js' var='bootstrapjs' />
<spring:url value='${baseUrl}js/lib/jquery.validate.min.js' var='validatejs' />
<spring:url value='${baseUrl}js/lib/bootstrap-datetimepicker.min.js' var='bootstrapdatepickerjs' />
<spring:url value='${baseUrl}js/lib/jquery.dialogextend.min.js' var='dialogextendjs' />
<spring:url value='${baseUrl}js/lib/jquery.html5jpMeterPolyfill.js' var='html5jpMeterPolyfilljs' />
<spring:url value='${baseUrl}js/lib/select2.js' var='select2js' />
<spring:url value='${baseUrl}js/lib/bootstrap-slider.js' var='bootstrapsliderjs' />
<spring:url value='${baseUrl}js/lib/jquery.mousewheel.min.js' var='jquerymousewheelminjs' />
<spring:url value='${baseUrl}js/common/common.js' var='commonjs' />
<spring:url value='${baseUrl}js/lib/jquery.cookie.js' var='jquerycookie' />

<link media='screen' rel='stylesheet' href='${jqueryuicss}?<%= sysDate %>' type='text/css' />
<link media='screen' rel='stylesheet' href='${bootstrapcss}?<%= sysDate %>' type='text/css' />
<link media='screen' rel='stylesheet' href='${bootstrapresponsivecss}?<%= sysDate %>' type='text/css' />
<link media='screen' rel='stylesheet' href='${commoncss}?<%= sysDate %>' type='text/css' />
<link media='screen' rel='stylesheet' href='${bootstrapdatepickercss}?<%= sysDate %>' type='text/css' />
<link media='screen' rel='stylesheet' href='${bootstrapslidercss}?<%= sysDate %>' type='text/css' />
<link media='screen' rel='stylesheet' href='${select2css}?<%= sysDate %>' type='text/css' />
<link media='screen' rel='stylesheet' href='${indexcss}?<%= sysDate %>' type='text/css' />

<script type='text/javascript' src='${jquery}?<%= sysDate %>'></script>
<script type='text/javascript' src='${jquerymigrate}?<%= sysDate %>'></script>
<script type='text/javascript' src='${validatejs}?<%= sysDate %>'></script>
<script type='text/javascript' src='${bootstrapdatepickerjs}?<%= sysDate %>'></script>
<script type='text/javascript' src='${jqueryui}?<%= sysDate %>'></script>
<script type='text/javascript' src='${bootstrapjs}?<%= sysDate %>'></script>
<script type='text/javascript' src='${dialogextendjs}?<%= sysDate %>'></script>
<script type='text/javascript' src='${html5jpMeterPolyfilljs}?<%= sysDate %>' charset="UTF-8"></script>
<script type='text/javascript' src='${select2js}?<%= sysDate %>'></script>
<script type='text/javascript' src='${bootstrapsliderjs}?<%= sysDate %>'></script>
<script type='text/javascript' src='${jquerymousewheelminjs}?<%= sysDate %>'></script>
<script type='text/javascript' src='${commonjs}?<%= sysDate %>'></script>
<script type='text/javascript' src='${jquerycookie}?<%= sysDate %>'></script>