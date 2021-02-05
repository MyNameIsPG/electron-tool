#### 表字段说明

```
{
  tableSchema: 'string', // 数据库名称
  tableName: 'string', // 表名称
  columnKey: 'PRI', // 主键标识
  columnName: 'string', // 字段列名
  javaField: 'string', // java字段
  dataType: 'string', // 数据库类型
  javaType： 'string', // java 类型
  columnComment: 'string', // 字段描述
  isInsert: true, // 新增
  isEdit: true, // 编辑
  isList: true, // 列表
  isQuery: true, // 查询
  isRequired: false, // 必填
  htmlType: '', // 显示类型
}
```

electron-builder