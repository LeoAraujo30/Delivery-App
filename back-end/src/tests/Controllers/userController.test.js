const { expect } = require('chai');
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const userController = require('../../api/Controllers/UserController');
const Service = require('../../api/Services/Index');

chai.use(sinonChai);

describe('Testes do userController', function () {
  const retornoLogin = {
    id: 3,
    name: "Cliente Zé Birita",
    email: "zebirita@email.com",
    role: "customer",
    token: "token_generico"
  }
  beforeEach(() => {
    sinon.restore();
  });
  describe('Testes do endpoint login', function () {
    it('Deve retornar os dados de login corretamente', async function () {
      const res = {};
      const req = { 
        body: {  
        email: "zebirita@email.com",
        password: "$#zebirita#$" 
        } 
      };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      
      sinon.stub(Service.userService, 'userLogin').resolves({ 
        message: retornoLogin,
        status: 200
      });
      await userController.userLogin(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(retornoLogin);
    });
    it('Deve retornar os dados de falha corretamente', async function () {
      const res = {};
      const req = {
        body: {  
        email: "zebirita@email.com",
        password: "$#zebirita#$" 
        } 
      };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      
      sinon.stub(Service.userService, 'userLogin').resolves({ 
        message: 'Not found',
        status: 404
      });
      await userController.userLogin(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith('Not found');
    });
  });

  describe('Testes do endpoint register', function () {
    it('Deve retornar os dados de registro corretamente', async function () {
      const res = {};
      const req = { 
        body: {  
        email: "zebirita@email.com",
        password: "$#zebirita#$" 
        } 
      };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      
      sinon.stub(Service.userService, 'register').resolves({ 
        message: 'token_generico',
        status: 201
      });
      await userController.register(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith('token_generico');
    });
    it('Deve retornar os dados de falha no registro ', async function () {
      const res = {};
      const req = {
        body: {  
        email: "zebirita@email.com",
        password: "$#zebirita#$" 
        } 
      };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      
      sinon.stub(Service.userService, 'register').resolves({ 
        message: 'Conflict',
        status: 409
      });
      await userController.register(req, res);

      expect(res.status).to.have.been.calledWith(409);
      expect(res.json).to.have.been.calledWith('Conflict');
    });
  });
});
