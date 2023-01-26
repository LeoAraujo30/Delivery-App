const { expect } = require('chai');
const sinon = require('sinon');
const chai = require('chai');
const UserService = require("../../api/Services/UserService");
const { User } = require('../../database/models');
const tokenServices = require('../../api/Helpers/tokenFunctions');

describe('Testes da UserService', function () {
  beforeEach(() => {
    sinon.restore();
  });
  describe('Testes da funcao de login', function () {
    it('Login realizado com sucesso', async function () {
      const token = 'token_generico'
      const bodyData = {  
        email: "zebirita@email.com",
        password: "$#zebirita#$" 
      };
      const serviceMessage = {
        id: 3,
        name: "Cliente Zé Birita",
        email: "zebirita@email.com",
        role: "customer",
        token
      };
      sinon.stub(tokenServices, 'createToken').returns(token);
      sinon.stub(User, 'findOne').resolves({ 
        dataValues: {
          id: 3,
          name: 'Cliente Zé Birita',
          email: "zebirita@email.com", 
          password: "1c37466c159755ce1fa181bd247cb925",
          role: "customer"
        }
      });
      const serviceReturn = await UserService.userLogin(bodyData);
      expect(serviceReturn.status).to.be.equal(200);
      expect(serviceReturn.message).to.be.deep.equal(serviceMessage);
    });
    it('Falha no login (dados incorretos)', async function () {
      const bodyData = {  
        email: "emailerrado@email.com",
        password: "senhalouca" 
      };
      sinon.stub(User, 'findOne').resolves(undefined);
      const serviceReturn = await UserService.userLogin(bodyData);
      expect(serviceReturn.status).to.be.equal(404);
      expect(serviceReturn.message).to.be.deep.equal('Not found');
    });
  });

  describe('Testes da funcao de register', function () {
    it('Registro realizado com sucesso', async function () {
      const token = 'token_generico'
      const bodyData = {
        name: "biriteiro",
        email: "zebirita@email.com",
        password: "$#zebirita#$" 
      };
      sinon.stub(tokenServices, 'createToken').returns(token);
      sinon.stub(User, 'findOne').resolves(null);
      sinon.stub(User, 'create').resolves(null);
      const serviceReturn = await UserService.register(bodyData);
      expect(serviceReturn.status).to.be.equal(201);
      expect(serviceReturn.message).to.be.deep.equal(token);
    });
    it('Falha no registro', async function () {
      const token = 'token_generico'
      const bodyData = {
        name: "biriteiro",
        email: "zebirita@email.com",
        password: "$#zebirita#$" 
      };
      sinon.stub(tokenServices, 'createToken').returns(token);
      sinon.stub(User, 'findOne').resolves({ 
        dataValues: {
          id: 3,
          name: 'Cliente Zé Birita',
          email: "zebirita@email.com", 
          password: "1c37466c159755ce1fa181bd247cb925",
          role: "customer"
        }
      });
      const serviceReturn = await UserService.register(bodyData);
      expect(serviceReturn.status).to.be.equal(409);
      expect(serviceReturn.message).to.be.deep.equal('Conflict');
    });
  });
});
