import { Model } from "sequelize";

type RoleAttributes = {
  userId: number,
  name: string,
};
module.exports = (sequelize:any, DataTypes:any) => {
  class Role extends Model<RoleAttributes> implements RoleAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     userId!: number;
     name!: string;
 
    static associate(models:any) {
      // define association here
    }
  }
  Role.init(
    {
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Role",
    }
  );
  return Role;
};
