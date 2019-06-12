module.exports = (sequelize, DataTypes) => {
    const Disciplina = sequelize.define('disciplinas', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: DataTypes.STRING,
    })
  
    return Disciplina
  }
  