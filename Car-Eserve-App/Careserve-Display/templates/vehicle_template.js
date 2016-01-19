<script type="text/template" id="vehicle-template">
	<%_.each(vehicle, function(data, index){%>
		<a href='#<%= data.get("link") %>'><div class="tab-anchor"><%= data.get("name") %> </div></a>
	<%}) %>
</script>