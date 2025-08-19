# 🎵 Flowy - Bruno, Vitor, Giovanna, Mayra

Esta API e app foram desenvolvidos como requisito para obtenção de nota no curso **Técnico em Desenvolvimento de Sistemas**, na disciplina **Programação Mobile**, ministrada pelos professores **Pompeu** e **Gilson**.

O objetivo do projeto **FLOWY** é criar um **app de música simplificado**, semelhante a um Spotify, permitindo que os usuários criem playlists, ouçam músicas, explorem artistas e gerenciem suas músicas de forma prática e organizada.

---

## 🚀 Resumo do Projeto

O **FLOWY** é um app mobile desenvolvido em **React Native com Expo**, conectado a um banco de dados (local ou remoto) para salvar usuários, playlists e músicas. O app possui:

- Tela de login e cadastro de usuários
- Tela inicial com playlists e músicas recomendadas
- Biblioteca de artistas e álbuns
- Player simples para tocar músicas
- Gestão de playlists do usuário
- Tela sobre o projeto

O objetivo é criar uma experiência educativa e funcional, mostrando conceitos de programação mobile, navegação entre telas, armazenamento de dados e consumo de API.

---

## 📦 Dependências do Projeto

Para rodar o **FLOWY**, são necessárias as seguintes dependências:

- [React Native](https://reactnative.dev/)  
- [Expo](https://expo.dev/)  
- [React Navigation](https://reactnavigation.org/) → Navegação entre telas  
- [Expo-AV](https://docs.expo.dev/versions/latest/sdk/av/) → Player de música  
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) ou [SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/) → Armazenamento de playlists e usuários  
- [Axios](https://axios-http.com/) → Requisições para API (opcional, se usar servidor remoto)  

---

## 🛠 Estrutura do Projeto

```

src/
├── login/index.js ← Tela de Login e Cadastro
├── home/index.js ← Tela principal com playlists
├── grupos/index.js ← Biblioteca de artistas e álbuns
├── player/index.js ← Player de música
├── playlists/index.js ← Playlists do usuário
├── sobre/index.js ← Tela sobre o app
app.js ← Configuração da navegação principal

```


---

## 📄 Funcionalidades do App

- Tela de login e cadastro de usuário  
- Exibição de playlists em destaque e músicas recomendadas  
- Navegação por artistas e álbuns  
- Player de música com controles básicos (play, pause, próximo, voltar)  
- Criação, edição e gerenciamento de playlists do usuário  
- Armazenamento de dados no banco (local ou remoto)  
- Tela sobre o projeto e equipe  

---

## ⚡ Requisitos Funcionais

| Código | Requisito Funcional | Descrição |
|--------|-------------------|-----------|
| RF01   | Tela de Login | Usuário entra com e-mail e senha; se válido, é direcionado à Home. |
| RF02   | Cadastro de Usuário | Usuário sem conta pode criar nova conta; dados salvos no banco. |
| RF03   | Tela Inicial | Exibe playlists em destaque e carrossel de músicas recomendadas. |
| RF04   | Biblioteca de Artistas | Usuário pode explorar artistas e álbuns; clicar para ver músicas. |
| RF05   | Player de Música | Reproduz músicas com controles play/pause, próximo e voltar. |
| RF06   | Suporte a MP3 local/URL | Player suporta arquivos MP3 locais ou hospedados. |
| RF07   | Criar Playlists | Usuário pode criar playlists personalizadas. |
| RF08   | Adicionar músicas | Usuário pode adicionar músicas às playlists. |
| RF09   | Armazenamento de Dados | Usuário, playlists e músicas são salvos no banco. |
| RF10   | Tela Sobre | Exibe informações sobre o projeto e equipe. |
| RF11   | Logout | Usuário pode sair da conta e voltar para o login. |

---

## ⚡ Requisitos Não Funcionais

| Código | Requisito Não Funcional | Descrição |
|--------|------------------------|-----------|
| RNF01  | Plataforma | App desenvolvido em React Native/Expo, compatível com Android e iOS. |
| RNF02  | Performance | Carregamento rápido de telas e músicas, sem travamentos perceptíveis. |
| RNF03  | Segurança | Senhas devem ser armazenadas de forma segura (hash ou criptografia). |
| RNF04  | Usabilidade | Interface intuitiva, com botões claros e controles acessíveis. |
| RNF05  | Persistência de dados | Dados do usuário e playlists permanecem após fechar o app. |
| RNF06  | Escalabilidade | Estrutura permite adicionar novos recursos no futuro. |
| RNF07  | Confiabilidade | Lidar com falhas de rede sem travar o app. |
| RNF08  | Design | Tela escura predominante, cores consistentes e interface agradável. |
| RNF09  | Compatibilidade | Funciona em diferentes tamanhos de tela (responsivo). |
| RNF10  | Legibilidade do código | Código modular, organizado e fácil de manter. |

---

## 🚀 Como Rodar o Projeto

1. **Clone o repositório**

```
bash
git clone https://github.com/seu-usuario/flowy.git
cd flowy
```

2. **Instale as dependências**
   
```
npm install
expo install
```

3. **Inicie o app com Expo**
   
```
expo start
```
