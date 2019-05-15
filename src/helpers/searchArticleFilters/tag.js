import db from '../../models';

export default (keyword, author, tag) => {
  console.log('tag');
  let where = {};
  if (author || keyword || tag) {
    where = {
      status: { [db.Op.ne]: 'deleted' },
      [db.Op.or]: [
        {
          title: {
            [db.Op.iLike]: `%${keyword}%`
          }
        }
      ]
    };
  }
  return where;
};
