export default function (data) {
  return Object.keys(data)
    .map(key => {
      return {
        id: key,
        ...data[key],
      };
    })
    .sort(function (a, b) {
      return a.date > b.date ? -1 : a.date > b.date ? 1 : 0;
    });
}
//yukardaki key otomatik olarak bize bu keyleri döndürüyor
// ['-NLIlebz6E40V_Q2rqPm', '-NLIluM4vooi9UJ-8lON'];

//veriler bu şekilde oluyor.
//keyin altındaki bilgiler ...data[key] ile geliyor
// const a = [
//    {
//    id: '-NLIlebz6E40V_Q2rqPm'
//     date: '2023-01-08T23:45:48.524Z',
//     text: 'Deneme',
//     username: 'osman',
//   },
//    {
//     id:'-NLIluM4vooi9UJ-8lON'
//     date: '2023-01-08T23:46:52.109Z',
//     text: 'Testtttt',
//     username: 'osman',
//   },
// ];
