import React, { useState } from 'react';
import styles from './styles/projects.module.css';
import { Grid } from '@material-ui/core';

const projectUrls = [
  {
    id: 1,
    project_name: 'To-do лист',
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
    project_name: 'Коворкинг',
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
  const [projects, ] = useState(projectUrls);

  return (
    <div>
      <Grid container spacing={1}>
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </Grid>
    </div>
  )
}

function Project({ project }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <div className={`position-relative ${styles.project_info}`}>
        <img src={project.project_img} alt={`${project.project_name}_pic`} />
        <div className={`${styles.project_name} d-flex justify-content-center align-items-center`}>
          <p>{project.project_name}</p>
        </div>
      </div>
      <p className='d-lg-none'>{project.project_name}</p>
    </Grid>
  )
}

export default ProjectsList;