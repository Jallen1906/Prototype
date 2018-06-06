using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PrototypeDndWebAPI.Controllers
{
    public class ValuesController : ApiController
    {
        static List<string> languages = new List<string>()
        {
            "C#","ASP.NET","MVC"
        };

        // GET api/values
        public IEnumerable<string> Get()
        {
            return languages;
        }

        // GET api/values/5
        public string Get(int id)
        {
            return languages[id];
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
            languages.Add(value);
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
            languages[id] = value;
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            languages.RemoveAt(id);
        }
    }
}
