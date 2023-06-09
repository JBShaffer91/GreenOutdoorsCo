using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using GreenOutdoorsCo.Api.Models;
using GreenOutdoorsCo.Api.Services;
using GreenOutdoorsCo.Api.DTOs;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
  private readonly IUserService _userService;

  public AuthController(IUserService userService)
  {
    _userService = userService;
  }

  [HttpPost("register")]
  public async Task<IActionResult> Register(UserRegisterDto userRegisterDto)
  {
    ServiceResponse<int> response = await _userService.Register(
      userRegisterDto, 
      userRegisterDto.Password
    );

    if (!response.Success)
    {
      return BadRequest(response);
    }

    return Ok(response);
  }

  [HttpPost("login")]
  public async Task<IActionResult> Login(UserLoginDto userLoginDto)
  {
    ServiceResponse<string> response = await _userService.Login(
      userLoginDto.Username, 
      userLoginDto.Password
    );

    if (!response.Success)
    {
      return BadRequest(response);
    }

    return Ok(response);
  }

  // Logout method here
}
