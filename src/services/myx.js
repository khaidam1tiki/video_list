class Target {
  promisify(func) {
    return (params) => {
      return new Promise((resolve, reject) => {
        func({
          ...params,
          success: (result) => {
            resolve(result);
          },
          fail: (error) => {
            reject(error);
          },
          complete: () => {},
        });
      });
    };
  }
}

const target = new Target();

const handler = {
  get: function (target, prop) {
    if (!my[prop]) {
      console.warn(`API myx.${prop} does not exist.`);
      return undefined;
    }

    return target.promisify(my[prop]);
  },
};

const myx = new Proxy(target, handler);

export default myx;