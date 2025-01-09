<script>
  let props = $props();
</script>

<div class={["form-control", props.class]}>
  <label class="label flex cursor-pointer items-start justify-start gap-2 p-0">
    <input
      type="checkbox"
      class="checkbox checkbox-sm border-gray-400 [--chkbg:theme(colors.primary)] [--chkfg:white] checked:border-primary
     active:border-primary dark:border-gray-800"
      checked={props?.checked}
      name={props?.name}
      autocomplete="off"
    />
    {@render props?.children()}
  </label>
</div>
