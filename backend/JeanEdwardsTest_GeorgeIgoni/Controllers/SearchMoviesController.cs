using JeanEdwardsTest_GeorgeIgoni.Data;
using JeanEdwardsTest_GeorgeIgoni.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace JeanEdwardsTest_GeorgeIgoni.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchMoviesController : ControllerBase
    {
        ApiDbContext _dbContext = new ApiDbContext();
        private HttpClient client;

        private IConfiguration _config;

        public SearchMoviesController(IConfiguration config)
        {
            _config = config;
            client = new HttpClient();
        }

        public string OMDb_BaseUrl = "http://www.omdbapi.com/";

    

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var latestQueries = await _dbContext.SearchQueries
               .OrderByDescending(q => q.CreatedAt)
               .Take(5)
               .ToListAsync();

            return Ok(latestQueries);
        }

        [HttpGet("{movieName}")]
        public async Task<IActionResult> GetMovieDetail(string movieName)
        {
            var OMDb_APIKey = _config.GetSection("OMDb").GetSection("KEY").Value;
            if (!movieName.IsNullOrEmpty())
            {
                var newQuery = new SearchQuery
                {
                    Query = movieName,
                    CreatedAt = DateTime.UtcNow
                };
                _dbContext.SearchQueries.Add(newQuery);
                await _dbContext.SaveChangesAsync();

                try
                {
                    client.BaseAddress = new Uri(OMDb_BaseUrl);
                    client.DefaultRequestHeaders.Add("Accept", "application/json");


                    var OMDb_EndPoint = "/?t=" + movieName + "&apikey=" + OMDb_APIKey;

                    HttpResponseMessage httpResponse = await client.GetAsync(OMDb_EndPoint);
                    httpResponse.EnsureSuccessStatusCode();

                    var stringMovieResult = await httpResponse.Content.ReadAsStringAsync();

                    Movie objMovieDetail = JsonConvert.DeserializeObject<Movie>(stringMovieResult);

                   
                    return StatusCode(StatusCodes.Status200OK, objMovieDetail);
                }
                catch (HttpRequestException httpRequestException)
                {
                    return BadRequest($"Error getting Movie Detail: {httpRequestException}");
                }

            }

            return BadRequest($"Error getting Movie Detail:");


        }

        
        
        [HttpGet("[action]")]
        public async Task<IActionResult> GetMovieById(string imdbID)
        {
            var OMDb_APIKey = _config.GetSection("OMDb").GetSection("KEY").Value;
            if (!imdbID.IsNullOrEmpty())
            {
                

                try
                {
                    client.BaseAddress = new Uri(OMDb_BaseUrl);
                    client.DefaultRequestHeaders.Add("Accept", "application/json");


                    var OMDb_EndPoint = "/?i=" + imdbID + "&apikey=" + OMDb_APIKey;

                    HttpResponseMessage httpResponse = await client.GetAsync(OMDb_EndPoint);
                    httpResponse.EnsureSuccessStatusCode();

                    var stringMovieResult = await httpResponse.Content.ReadAsStringAsync();

                    Movie objMovieDetail = JsonConvert.DeserializeObject<Movie>(stringMovieResult);


                    return StatusCode(StatusCodes.Status200OK, objMovieDetail);
                }
                catch (HttpRequestException httpRequestException)
                {
                    return BadRequest($"Error getting Movie Detail: {httpRequestException}");
                }

            }

            return BadRequest($"Error getting Movie Detail:");


        }
    }
}
