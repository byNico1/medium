export default {
    name: 'comment',
    type: 'document',
    title: 'Comment',
    fields: [
      {
        name: 'name',
        type: 'string',
      },
      {
        title: 'Approved',
        name: 'approved',
        type: 'boolean',
        description: 'comments wont show on the site without approval'
      },
      {
          name: 'comment',
          type: 'text',
      },
      {
          name: 'post',
          type: 'reference',
          to: [{ type: "post" }],
      }
    ],
  }
  