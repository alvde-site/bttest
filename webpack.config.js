const fs = require("fs");
const path = require("path");
const url = require("url");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const header = fs.readFileSync(__dirname + "/src/templates/header.html");
const footer = fs.readFileSync(__dirname + "/src/templates/footer.html");
const main = fs.readFileSync(__dirname + "/src/templates/main.html");
const form = fs.readFileSync(__dirname + "/src/templates/form.html");

let host = "https://bttest-3no2.onrender.com";
// host = null;

module.exports = {
  entry: { main: "./src/pages/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/main.js",
    publicPath: "",
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "./dist"), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
    // open: true, // сайт будет открываться сам при запуске npm run dev
  },
  module: {
    rules: [
      // rules — это массив правил
      // добавим в него объект правил для бабеля
      {
        // регулярное выражение, которое ищет все js файлы
        test: /\.js$/,
        // при обработке этих файлов нужно использовать babel-loader
        use: "babel-loader",
        // исключает папку node_modules, файлы в ней обрабатывать не нужно
        exclude: "/node_modules/",
      },
      {
        // регулярное выражение, которое ищет все файлы с такими расширениями
        test: /\.(png|svg|jpg|gif|eot|ttf|otf)$/,
        type: "asset/resource",
        generator: {
          publicPath: host
            ? `${host}/images/`
            : "http://localhost:8080/images/",
          outputPath: "images/",
        },
      },
      {
        // регулярное выражение, которое ищет все файлы с такими расширениями
        test: /\.(woff(2)?)$/,
        type: "asset/resource",
        generator: {
          publicPath: host ? `${host}/fonts/` : "http://localhost:8080/fonts/",
          outputPath: "fonts/",
        },
      },
      {
        // применять это правило только к CSS-файлам
        test: /\.css$/,
        // при обработке этих файлов нужно использовать
        // MiniCssExtractPlugin.loader и css-loader
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            // добавьте объект options
            options: { importLoaders: 1 },
          }, // Добавьте postcss-loader
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/templates/index.html", // путь к файлу index.html
      header,
      footer,
      main,
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/formpage.html",
      filename: "formpage.html",
      header,
      footer,
      form,
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/templatepage.html",
      filename: "templates/template.html",
      header,
      footer,
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/main.html",
      filename: "templates/main.html",
      inject: false,
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/form.html",
      filename: "templates/form.html",
      inject: false,
      minify: false,
    }),
    new CleanWebpackPlugin(), // использовали плагин
    new MiniCssExtractPlugin({
      filename: "css/[name].css", // relative to output.path
    }), // подключение плагина для объединения файлов
  ],
};
