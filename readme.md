# @geeeger/web-copy

一个函数复制到剪贴板(仅限文字)

### Usage

```javascript
import copy from '@geeeger/web-copy';

copy(
  '需要复制的文本',
  function success() {
    // todo
  },
  function error() {
    // todo
  }
);
```

### 注意事项

由于内部使用了 `target.click()` , 如果复制不成功,请检查是否由点击事件直接触发的 copy
