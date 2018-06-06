﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using PrototypeDndWebAPI.Models;

namespace PrototypeDndWebAPI.Controllers
{
    public class CharacterController : ApiController
    {
        public PrototypeDndWebAPI.Models.CharacterData TestCharacter;

        public CharacterController()
        {
            this.TestCharacter = new PrototypeDndWebAPI.Models.CharacterData();
            this.TestCharacter.CharInfo.SetCharacterInfo("Joe Guckian", // Name
                "Barbarian", // Class
                "Halfling", // Race
                "Lawful Good", // Alignment
                "Common"); // Languages
        }

        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            //return new string[] { "value1", "value2" };
            return TestCharacter.CharInfo.GetCharacterInfo();
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}