<template>
  <div class="row">
      <div class="col-sm-12">
            <h3>Quote Added</h3>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuemax="100" aria-valuemin="0" aria-valuenow="60"
                :style="{width: (qouteCount/maxQuotes) *100 + '%'}">
                    {{ qouteCount }} / {{ maxQuotes }}
                </div>
            </div>
    </div>

      
  </div>
</template>

<script>
    export default {
        props : ['qouteCount','maxQuotes']
    }
</script>