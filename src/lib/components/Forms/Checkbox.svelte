<script>
  let props = $props();
</script>
<div class={["form-control", props.class]}>
  <label class="label cursor-pointer flex justify-start items-start gap-2 p-0">
    <input type="checkbox" class="checkbox checkbox-sm border-gray-400 dark:border-gray-800 [--chkbg:theme(colors.primary)] [--chkfg:white]
     active:border-primary checked:border-primary" checked={props?.checked} name={props?.name} autocomplete="off"/>
    {@render props?.children()}
  </label>
</div>