# ![Logo](/server/src/assets/img/logo.png) Rutas Doradas Api ✨

## 🗃️Technology

[![node](https://img.shields.io/badge/node-20.x-green.svg)](https://nodejs.org/docs/latest-v20.x/api/index.html) [![npm](https://img.shields.io/badge/npm-10.x-red.svg)](https://www.npmjs.com/) [![express](https://img.shields.io/badge/express-4.19.x-blue.svg)](https://expressjs.com/) [![swagger](https://img.shields.io/badge/swagger_ui_express-3.0.x-greem.svg)](https://swagger.io/)

## 🧑‍💻 Developer Teams

| ![Avatar](https://avatars.githubusercontent.com/u/69812733?s=96&v=4) |![Avatar](https://avatars.githubusercontent.com/u/65308067?s=96&v=4) | ![Avatar]() | ![Avatar](https://avatars.githubusercontent.com/u/83015542?s=96&v=4) | ![Avatar](https://avatars.githubusercontent.com/u/136535873?s=96&v=4) |
|:-:|:-:|:-:|:-:|:-:|
| **David Caycedo**  | **Rogelio Romo**  | **Pedro Molina**  | **Agustin Gracia**  | **Luis Correa** |
| Back-End Dev | Back-End Dev | Back-End Dev | Back-End Dev | Back-End Dev |
|[![Github Link](https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white 'Github Link')](https://github.com/David-Coach-Dev)[![LinkedIn Link](https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white 'LinkedIn Link')](https://www.linkedin.com/in/davidcoachdev/) | [![Github Link](https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white 'Github Link')]( https://github.com/RogelioRomo)[![LinkedIn Link](https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white 'LinkedIn Link')]( https://www.linkedin.com/in/rogelio-romo-5712591b8/) | [![Github Link](https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white 'Github Link')](https://github.com/pedroMolina-lab)[![LinkedIn Link](https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white 'LinkedIn Link')](https://www.linkedin.com/) | [![Github Link](https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white 'Github Link')](https://github.com/Agustingmaggi)[![LinkedIn Link](https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white 'LinkedIn Link')](https://www.linkedin.com/in/agustin-garcia-maggi) | [![Github Link](https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white 'Github Link')](https://github.com/luiscorrea7)[![LinkedIn Link](https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white 'LinkedIn Link')](https://www.linkedin.com) |

## Requirements 🛠️📋

👉🏻 To use locally Ruta Dorada, you need to:

Clone our repository

```sh
git clone https://github.com/No-Country/c17-29-n-node.git
```

Move into Client Folder and install dependencies

```sh
cd Server | npm i
```

Run the project locally

```sh
npm run dev
```

## 👀 Motivation

resumen de la motivación

## 🩻 Progress Report

### Start Route

| Method | Router | Endpoint | Documentation | Api Key | Token |
| :-: | :-: | :-: | :-: | :-: | :-: |
| Get | /api | ✔️ | ✔️ | ❌ | ❌ |

### Invalid Route

| Method | Router | Endpoint | Documentation | Api Key | Token |
| :-: | :-: | :-: | :-: | :-: | :-: |
| Get | /* |✔️ | ✔️ | ❌ | ❌ |

### Doc Route

| Method | Router | Endpoint | Documentation | Api Key | Token |
| :-: | :-: | :-: | :-: | :-: | :-: |
| Get | /api/docs | ✔️ | ✔️ | ❌ | ❌ |

### Authorization Routes

| Method | Router | Endpoint | Documentation | Api Key | Token |
| :-: | :-: | :-: | :-: | :-: | :-: |
| Get | /auth/profile | ✔️ | ✔️ | ✔️ | ✔️ |
| Post | /auth/register | ✔️ | ✔️ | ✔️ | ❌ |
| Post | /auth/login | ✔️ | ✔️ | ✔️ | ❌ |

### User Routes

| Method | Router | Endpoint | Documentation | Api Key | Token |
| :-: | :-: | :-: | :-: | :-: | :-: |
| Get | /users/ | ✔️ | ✔️ | ✔️ | ❌ |
| Get | /users/:id | ✔️ | ✔️ | ✔️ | ❌ |
| Post | /users/ | ✔️ | ✔️ | ✔️ | ✔️ |
| Put | /users/:id | ✔️ | ✔️ | ✔️ | ✔️ |
| Delete | /users/:id | ✔️ | ✔️ | ✔️ | ✔️ |

### Car Routes

| Method | Router | Endpoint | Documentation | Api Key | Token |
| :-: | :-: | :-: | :-: | :-: | :-: |
| Get | /cars/ | ✔️ | ✔️ | ✔️ | ❌ |
| Get | /cars/:id | ✔️ | ✔️ | ✔️ | ❌ |
| Post | /cars/ | ✔️ | ✔️ | ✔️ | ✔️ |
| Put | /cars/:id | ✔️ | ✔️ | ✔️ | ✔️ |
| Delete | /cars/:id | ✔️ | ✔️ | ✔️ | ✔️ |

### Travel Routes

| Method | Router | Endpoint | Documentation | Api Key | Token |
| :-: | :-: | :-: | :-: | :-: | :-: |
| Get | /travel/ | ✔️ | ✔️ | ✔️ | ❌ |
| Get | /travels/:id | ✔️ | ✔️ | ✔️ | ❌ |
| Post | /travels/ | ✔️ | ✔️ | ✔️ | ✔️ |
| Put | /travels/:id | ✔️ | ✔️ | ✔️ | ✔️ |
| Delete | /rs/:id | ✔️ | ✔️ | ✔️ | ✔️ |

### Rating Routes

| Method | Router | Endpoint | Documentation | Api Key | Token |
| :-: | :-: | :-: | :-: | :-: | :-: |
| Get | /ratings/ | ✔️ | ✔️ | ✔️ | ❌ |
| Get | /ratings/:id | ✔️ | ✔️ | ✔️ | ❌ |
| Get | /ratings/ratee/:id | ✔️ | ✔️ | ✔️ | ❌ |
| Get | /ratings/rater/:id | ✔️ | ✔️ | ✔️ | ❌ |
| Post | /ratings/ | ✔️ | ✔️ | ✔️ | ✔️ |
| Put | /ratings/:id | ✔️ | ✔️ | ✔️ | ✔️ |
| Delete | /ratings/:id | ✔️ | ✔️ | ✔️ | ✔️ |
