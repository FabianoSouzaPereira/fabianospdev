import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Login } from './pages/login/shared/login.model';

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const logins: Login[] = [
      { id: 1, name: 'Moradia', email: 'teste1@teste.com', password: '123456' },
      { id: 2, name: 'Saúde', email: 'teste2@teste.com', password: '123456' },
      { id: 3, name: 'Lazer', email: 'teste3@teste.com', password: '123456' },
      { id: 4, name: 'Salário', email: 'tes4te@teste.com', password: '123456' },
      { id: 5, name: 'Freelas', email: 'tes5te@teste.com', password: '123456' }
    ]

    return { logins }
  }
}
