import React, { useState } from 'react';

const projectUrls = [
  {
    id: 1,
    project_name: 'to-do list',
    project_url: 'https://emir507.github.io/to-do',
    project_img: '/images/todo-list.png'
  },
  {
    id: 2,
    project_name: 'Сеть быстрого питания',
    project_url: 'https://emir507.github.io/Burgers/',
    project_img: '/images/fastfood.png'
  },
  {
    id: 3,
    project_name: 'Букинг',
    project_url: 'https://emir507.github.io/hunger/',
    project_img: '/images/restaurant.png'
  },
  {
    id: 4,
    project_name: 'Проект из курсов',
    project_url: 'https://emir507.github.io/week-2/',
    project_img: '/images/coworking.png'
  },
  {
    id: 5,
    project_name: 'База данных кино',
    project_url: 'https://movies-database.vercel.app',
    project_img: '/images/movies.png'
  },
  {
    id: 6,
    project_name: 'Игра Simon-game',
    project_url: 'https://emir507.github.io/simon-game',
    project_img: '/images/simon-game.png'
  },
  {
    id: 7,
    project_name: 'Форма для клиента',
    project_url: 'https://emir507.github.io/vue-form',
    project_img: '/images/client-form.png'
  },
  {
    id: 8,
    project_name: 'Приватный аккаунт',
    project_url: 'https://emir507.github.io/private-account',
    project_img: '/images/private-account.png'
  },
]

function ProjectsList() {
  const [projects, ] = useState(projectUrls)
  return (
    <div>
      <style jsx>{`
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr; 
        }
        img {
          width: 100%;
          heigth: 100%;
          display: block;
        }
      `}</style>
      <ul>
        {projects.map(project => (
          <li key={project.id} className="d-flex col-6 flex-column">
            <div>
              <img src={project.project_img} alt={`${project.project_name}_pic`} />
            </div>
            <h1>{project.project_name}</h1>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectsList;