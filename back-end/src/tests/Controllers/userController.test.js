// const { expect } = require('chai');
// const sinon = require('sinon');
// const chai = require('chai');
// // const sinonChai = require('sinon-chai');
// const { User } = require('../../database/models');
// const userController = require('../../api/Controllers/UserController');
// const tokenServices = require('../../api/Helpers/tokenFunctions');


// describe('Testes do userController', function () {
  // const retornoLogin = {
  //   id: 3,
  //   name: "Cliente Zé Birita",
  //   email: "zebirita@email.com",
  //   role: "customer",
  //   token: "tokenGerado"
  // }
//   describe('Testes do endpoint login', function () {
//     it('Deve retornar os dados de login ou falha corretamente', async function () {
//       const res = {};
//       const req = { 
        // body: {  
        // email: "zebirita@email.com",
        // password: "$#zebirita#$" 
        // } 
//       };
//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns();

//       sinon.stub(User, 'findOne').resolves({ 
//         dataValues: {
//           id: 3,
//           name: 'Cliente Zé Birita',
//           email: "zebirita@email.com", 
//           password: "1c37466c159755ce1fa181bd247cb925",
//           role: "customer"
//         }
//       });
//       sinon.stub(tokenServices, 'createToken').resolves('tokenGerado')
//       await userController.userLogin(req, res);
//       // expect(res.status).to.have.been.calledWith(200);
//       // expect(res.json).to.have.been.calledWith({
//       //   id: 3,
//       //   name: "Cliente Zé Birita",
//       //   email: "zebirita@email.com",
//       //   role: "customer",
//       //   token: "tokenGerado"
//       // });

//       // expect(res.json).to.have.been.deep.equal({
//       //   id: 3,
//       //   name: "Cliente Zé Birita",
//       //   email: "zebirita@email.com",
//       //   role: "customer",
//       //   token: "tokenGerado"
//       // });

//       expect(res.status.returns(retornoLogin));
//     });
//   });
// });
