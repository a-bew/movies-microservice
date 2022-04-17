import { Model } from "sequelize";

type UserAttributes = {
  userId: number,
  name: string,
};

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     userId!: number;
    name!: string;
    static associate(models: any) {
      // define association here

      User.hasOne(models.Role, {
        foreignKey: "userId",
        as: "role",
        onDelete: "CASCADE",
      });

      User.hasMany(models.Movie, {
        foreignKey: "userId",
        as: "movies",
      });
    }
  }

  User.init(
    {
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
