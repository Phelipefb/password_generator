# Gerador de Senhas

[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE) [![HTML5](https://img.shields.io/badge/HTML5-%23E34F26?style=for-the-badge&logo=html5&logoColor=white)](#) [![CSS3](https://img.shields.io/badge/CSS3-%231572B6?style=for-the-badge&logo=css3&logoColor=white)](#) [![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#) [![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen?style=for-the-badge)](#)

O **Gerador de Senhas** é uma aplicação web simples que gera senhas aleatórias diretamente no navegador. O usuário escolhe o tamanho da senha, gera uma senha e pode clicar sobre ela para copiar — o texto do tooltip muda temporariamente para indicar que a senha foi copiada.

Tudo funciona sem backend: apenas HTML, CSS e JavaScript (uso do `navigator.clipboard` para cópia).

---

## Stacks do Projeto

### Dependências de produção

| Pacote / Tecnologia | Versão | Finalidade                       |
| ------------------- | ------ | -------------------------------- |
| HTML5               | N/A    | Estrutura da página              |
| CSS3                | N/A    | Estilos e layout                 |
| JavaScript (ES6+)   | N/A    | Lógica, geração e cópia da senha |

### Dependências de desenvolvimento

| Pacote  | Versão | Finalidade                                |
| ------- | ------ | ----------------------------------------- |
| Nenhuma | —      | Projeto estático simples, sem build tools |

---

## Estrutura de Pastas

```
password_generator/
├── index.html           # Página principal (interface do gerador)
├── script.js            # Lógica: geração e cópia da senha
├── style.css            # Estilos visuais
└── README.md            # Documentação do projeto
```

---

## Estilos Iniciais

O projeto já inclui `style.css`. Um exemplo mínimo de estilos para melhorar a aparência:

```css
body {
  font-family: Arial, Helvetica, sans-serif;
  background: #f3f4f6;
  color: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
}

.container {
  display: flex;
  gap: 12px;
  align-items: center;
}

.container-password {
  background: #ffffff;
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(2, 6, 23, 0.06);
}

.tooltip {
  display: block;
  margin-top: 8px;
  font-size: 0.9rem;
  color: #475569;
}
```

---

## Como Usar

- Abra [index.html](index.html) no navegador.
- Ajuste o tamanho da senha com o slider.
- Clique em **Gerar Senha** para criar uma senha aleatória.
- Clique na área da senha para copiá-la; o texto do tooltip muda para confirmar a cópia por 3 segundos.

Se preferir pode utilizar um servidor local (útil para algumas APIs do navegador).

---

## Funcionalidades

- Geração de senhas aleatórias com letras maiúsculas, minúsculas, números e símbolos.
- Cópia para área de transferência com confirmação visual (texto temporário do tooltip).
- Interface simples e sem dependências externas.

---

## Assets

Não há assets externos obrigatórios para o funcionamento. Arquivos principais:

- [index.html](index.html)
- [script.js](script.js)
- [style.css](style.css)

---

## Sumário

- [Stacks do Projeto](#stacks-do-projeto)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Estilos Iniciais](#estilos-iniciais)
- [Como Usar](#como-usar)
- [Funcionalidades](#funcionalidades)
- [Assets](#assets)

---

## Licença

Licença MIT — sinta-se livre para usar e adaptar este projeto.
