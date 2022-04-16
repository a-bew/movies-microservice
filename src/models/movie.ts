import { Model } from "sequelize";

type MovieAttributes = {
  userId: number,
  title: string,
  release: string,
  genre: string,
  director: string
  // other attributes...
};

module.exports = (sequelize:any, DataTypes:any) => {
  class Movie extends Model<MovieAttributes> 
  implements MovieAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     userId!: number;
     title!: string;
     release!: string;
     genre!: string;
     director!: string;
    static associate(models:any) {
      // define association here
    }
  }
  Movie.init(
    {
      userId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      release: DataTypes.STRING,
      genre: DataTypes.STRING,
      director: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
